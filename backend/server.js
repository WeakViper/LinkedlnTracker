require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');


const express = require('express'); 
const mongoose = require('mongoose');

const userRouter = require('./routes/user');
const gptRouter = require('./routes/gpt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_GRANULE_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log(`Server started at http://localhost:${4000}` );
        });
    })
    .catch(err => console.log(err));

app.use(express.json());
app.use('/user', userRouter);
app.use('/prompt', gptRouter);


app.listen(3500, function() {
    console.log('Listening on http://localhost:4000');
});