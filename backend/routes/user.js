const User = require('../models/User');
const express = require('express');
const { scrapeProfile } = require('../scrapper');
const { auth } = require('express-openid-connect');

const router = express.Router();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000/user',
  clientID: 'pw2jY7qhGgPjdU3KtmUnBiQp2IPazFJX',
  issuerBaseURL: 'https://dev-i200f2ukojq0vb6r.us.auth0.com',
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config));

// get User
router.get('/', async (req, res) => {
  if (req.oidc.isAuthenticated()) {
    let email = "adeeb1037@gmail.com"//req.oidc.user.email
    const user = await User.findOne({ email: email });
    res.json(user);
  } else {
    res.status(400).send("Not Signed in");
  }
  
})

// Add User
router.post('/', async (req, res) => {
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
router.post('/contact', async (req, res) => {
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
router.put('/profile', async (req, res) => {
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

module.exports = router;