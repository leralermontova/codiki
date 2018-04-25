'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HouseSchema = new Schema({
  name: {
    type: String,
    default: 'New House'
  },
  description: {
    type: String,
    default: 'Default description'
  },
  price: {
    type: Number,
    default: 100000
  },
  new_price: {
    type: Number,
    default: 0
  },
  status: {
    type: [{
      type: String,
      enum: ['free', 'taken']
    }],
    default: ['free']
  }
});

module.exports = mongoose.model('Houses', HouseSchema);