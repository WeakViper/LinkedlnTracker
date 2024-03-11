const User = require('../models/User');
const express = require('express');
const { scrapeProfile } = require('../scrapper');

const router = express.Router();

// get User
router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.body.uid });
    if (!user) {
      res.json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
}})

// Add User
router.post('/create', async (req, res) => {
  try {
    let tempUser = req.body;
    const url = tempUser.url;
    tempUser.profileInfo = await scrapeProfile(url); //scrape profile info from url
    tempUser.contacts = []; //to initialize contacts
    const user = await User.create(tempUser); //create user
    user.save();
    res.json({ message: "Success!" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


// Add Contact for a user
router.post('/contact', async (req, res) => {
  try {
    const uid = req.body.uid;
    const name = req.body.name;
    const url = req.body.url;
    tempUser = { name: name, url: url, profileInfo: "" };
    const user = await User.findOne({ uid: uid });
    if (!user) {
      res.json({ message: "User not found" });
    } else {
      tempUser.profileInfo = await scrapeProfile(url);
      user.contacts.push(tempUser);
      user.save();
      res.json({ message: "Success!" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
}})

// Update profile for a user
router.post('/profile', async (req, res) => {
  try {
    let uid = req.body.uid;
    const user = await User.findOne({ uid: uid });
    if (user.url !== req.body.url) { // if the url has changed, scrape the new url
      user.profileInfo = await scrapeProfile(req.body.url); //send url in json.
    };
    user.name = req.body.name;
    user.save();
    res.json({ message: "Success!" });
  } catch (error) {
    res.status(400).send({ error: error.message })
}})

module.exports = router;