const express = require('express');
const User = require('../models/User');
const { OpenAI } = require("openai");
require("dotenv").config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

router.post('/intro', async (req, res) => {
    let uid = req.body.uid;
    let url = req.body.url;
    let prompt = "Given above, in JSON, is my profile followed by another persons profile. Analyse both of them and find any commonalities like common fields, interests, projects, education, work ecperience and craft the perfect professional personalised invite for me to send this person to connect on linkedln. It should just be two lines long."
    const user = await User.findOne({ uid: uid });
    let contact = user.contacts.find(contact => contact.url === url)
    let context = "This is my profile: " + user.profileInfo + " The person i want to reach out to is as follows with all their information as json: " + contact.profileInfo
    let response = await giveAnswer(prompt, context)
    console.log(response)
    res.send(response)

})

router.post('/continue', async (req, res) => {
    let uid = req.body.uid;
    let url = req.body.url;
    let convo = req.body.conversation;
    let prompt = "Given above, in JSON, is my profile followed by another persons profile. This is followed by a conversation we have been having. Analyse all three of these in detail  and find any commonalities like common fields, interests, projects, education, work ecperience and craft the perfect professional personalised reply to continue this conversation based on our chat and profiles."
    const user = await User.findOne({ uid: uid });
    let contact = user.contacts.find(contact => contact.url === url)
    let context = "This is my profile: " + user.profileInfo + " The person i want to reach out to is as follows with all their information as json: " + contact.profileInfo + "This is our convo so far: " + convo;
    let response = await giveAnswer(prompt, context);
    console.log(response);
    res.send(response);

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
        console.error("ERROR HAS HAPPENED");
        console.log(error);
    }
};

module.exports = router;