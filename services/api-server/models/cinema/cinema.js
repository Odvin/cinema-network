const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  city: { type: String, required: true },
  name: { type: String, required: true },
});

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;