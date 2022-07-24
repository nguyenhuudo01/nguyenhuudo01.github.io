"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = new Schema({
  name: {
    type: String,
    required: true,
    "default": ''
  },
  username: {
    type: String,
    required: true,
    "default": ''
  },
  password: {
    type: String,
    required: true,
    "default": ''
  },
  email: {
    type: String,
    required: true,
    "default": ''
  },
  image: {
    type: String,
    required: true,
    "default": ''
  },
  address: {
    type: String,
    required: true,
    "default": ''
  },
  phone: {
    type: String,
    "default": ''
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  categoryUser: {
    type: Schema.Types.ObjectId,
    ref: 'CategoryUsers'
  }
});
module.exports = mongoose.model('Users', User);