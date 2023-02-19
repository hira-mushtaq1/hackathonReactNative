const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
  curr_Latitude: String,
  curr_Longitude: String,
  category: String,
});

const LocationModel = mongoose.model('Location', LocationSchema);

module.exports = LocationModel;
