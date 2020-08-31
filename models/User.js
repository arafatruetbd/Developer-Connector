const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
    maxlength:30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true
  },
  password: {
    type: String,
    required: true
  },
  profile:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile'
},
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
