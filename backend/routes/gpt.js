const express = require('express');
const User = require('../models/User');
const { OpenAI } = require("openai");
const { auth } = require('express-openid-connect');
require("dotenv").config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000/prompt',
    clientID: 'pw2jY7qhGgPjdU3KtmUnBiQp2IPazFJX',
    issuerBaseURL: 'https://dev-i200f2ukojq0vb6r.us.auth0.com',
  };
  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  router.use(auth(config));

router.get('/intro', async (req, res) => {
    // if (req.oidc.isAuthenticated()) {
        let email = "adeeb1037@gmail.com" //req.oidc.user.email;
        let name = req.body.name;
        let prompt = "Given above, in JSON, is my profile followed by another persons profile. Analyse both of them and find any commonalities like common fields, interests, projects, education, work ecperience and craft the perfect professional personalised invite for me to send this person to connect on linkedln. It should just be two lines long."
        const user = await User.findOne({ email: email });
        let contact = user.contacts.find(contact => contact.name === name)
        let context = "This is my profile: " + user.profileInfo + " The person i want to reach out to is as follows with all their information as json: " + contact.profileInfo
        let response = await giveAnswer(prompt, context)
        console.log(response)
        res.send(response)
    // } else {
    //     res.status(400).send("Not Signed in");
    // }
})

router.post('/continue', async (req, res) => {
    // if (req.oidc.isAuthenticated()) {
        let email = "adeeb1037@gmail.com" //req.oidc.user.email;
        let name = req.body.name;
        let convo = req.body.conversation;
        let prompt = "Given above, in JSON, is my profile followed by another persons profile. This is followed by a conversation we have been having. Analyse all three of these in detail  and find any commonalities like common fields, interests, projects, education, work ecperience and craft the perfect professional personalised reply to continue this conversation based on our chat and profiles."
        const user = await User.findOne({ email: email });
        let contact = user.contacts.find(contact => contact.name === name)
        let context = "This is my profile: " + user.profileInfo + " The person i want to reach out to is as follows with all their information as json: " + contact.profileInfo + "This is our convo so far: " + convo;
        let response = await giveAnswer(prompt, context)
        res.send(response)
    // } else {
    //     res.status(400).send("Not Signed in");
    // }
})

const giveAnswer = async (prompt, context) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: context },
            {role: "user", content: prompt},
            {role: "assistant", content: ""},
        ],
            model: "gpt-4-1106-preview", //gpt-3.5-turbo-1106
        });
        return completion.choices[0];  // Return the completion
    } catch (error) {
        console.error("ERROR HAS HAPPEN");
    }
};

module.exports = router;