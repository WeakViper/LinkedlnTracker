const User = require('../models/User');
const express = require('express');
const { scrapeProfile } = require('../scrapper');

const router = express.Router();

// get User
router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.body.uid });
    res.json(user);
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
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


// Add Contact for a user
router.post('/contact', async (req, res) => {
try {
  const tempUser = req.body;
  const user = await User.findOne({ email: email });
  tempUser.profileInfo = await scrapeProfile(tempUser.url);
  user.contacts.push(tempUser);
  user.save();
  res.json(user);
} catch (error) {
  res.status(400).send({ error: error.message })
}
})

// Update profile for a user
router.put('/profile', async (req, res) => {
try {
  let email = "adeeb1037@gmail.com" //req.oidc.user.email
  const user = await User.findOne({ email: email });
  user.profileInfo = await scrapeProfile(req.body.url); //send url in json.
  console.log(user.profileInfo)
  user.save();
  res.json(user);

} catch (error) {
  res.status(400).send({ error: error.message })
}})

module.exports = router;