const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userschema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      roles: {
        type: [String],
        default: ['user'], 
      },
      profile: {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        age: {
          type: Number,
        },
      },
      lastLogin: {
        type: Date,
        default: null,
      },
    });

module.exports = mongoose.model('User', userschema);

