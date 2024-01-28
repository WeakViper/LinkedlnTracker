const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileInfo: {
      type: String,
      required: true,
    },
    contacts: {
      type: [{
        name: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        profileInfo: {
          type: String,
          required: true,
        },}]
    }
})


module.exports = mongoose.model('User', userSchema);