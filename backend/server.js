require('dotenv').config()
const { auth } = require('express-openid-connect');
const bodyParser = require('body-parser');
const cors = require('cors');


const express = require('express'); 
const mongoose = require('mongoose');

const userRouter = require('./routes/user');
const gptRouter = require('./routes/gpt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000/',
    clientID: 'pw2jY7qhGgPjdU3KtmUnBiQp2IPazFJX',
    issuerBaseURL: 'https://dev-i200f2ukojq0vb6r.us.auth0.com',
    authorizationParams: {
        redirect_uri: 'http://localhost:3000/callback'
    }
};
  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

mongoose.connect(process.env.MONGO_GRANULE_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log(`Server started at http://localhost:${4000}` );
        });
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    if (req.oidc.isAuthenticated()) {
        res.redirect("http://localhost:3001/main-app")
    }
});

  

app.use(express.json());
// app.use('/user', userRouter);
// app.use('/prompt', gptRouter);

// get User
app.get('/user/', async (req, res) => {
    // console.log(req.oidc.isAuthenticated())
    // if (req.oidc.isAuthenticated()) {
      let email = "adeeb1037@gmail.com"//req.oidc.user.email
      const user = await User.findOne({ email: email });
      res.json(user);
    // } else {
    //   res.status(400).send("Not Signed in");
    // }
    
  })
  
  // Add User
  app.post('/', async (req, res) => {
    try {
      let tempUser = req.body;
      tempUser.email = "adeeb1037@gmail.com" //req.oidc.user.email;
      console.log(tempUser)
      tempUser.profileInfo = await scrapeProfile(tempUser.url)
      const user = await User.create(tempUser);
      user.save();
      res.send(user);
  } catch (error) {
      res.status(400).send({ error: error.message })
  }
  })
  
  // Add Contact for a user
  app.post('/contact', async (req, res) => {
    try {
      // if (req.oidc.isAuthenticated()) {
        let email = "adeeb1037@gmail.com" //req.oidc.user.email
        const user = await User.findOne({ email: email });
        const tempUser = req.body;
        tempUser.profileInfo = await scrapeProfile(tempUser.url);
        user.contacts.push(tempUser);
        user.save();
        res.json(user);
        console.log(user);
      // } else {
      //   res.status(500).send("Not Logged in");
      // }
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  })
  
  // Update profile for a user
  app.put('/profile', async (req, res) => {
    try {
      // if (req.oidc.isAuthenticated()) {
        let email = "adeeb1037@gmail.com" //req.oidc.user.email
        const user = await User.findOne({ email: email });
        user.profileInfo = await scrapeProfile(req.body.url); //send url in json.
        console.log(user.profileInfo)
        user.save();
        res.json(user);
      // } else {
      //   res.status(500).send("Not Logged in");
      // }
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  })




  
app.listen(3000, function() {
    console.log('Listening on http://localhost:3000');
});