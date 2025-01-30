const mongoose = require('mongoose');
const schema = mongoose.Schema;

const credentials = new schema({
  firstname: String,
  lastname: String,
  age: Number,
});

const userControl = new schema({
  username: { credentials, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rolls: [String],
  lastLogin: Date,
});

module.exports = mongoose.model('user', userControl);