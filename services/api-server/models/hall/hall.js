const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema({
  cinemaId: { type: mongoose.Schema.ObjectId, ref: 'Cinema' },
  name: { type: String, required: true },
  seats: { type: Number, required: true },
});

const Hall = mongoose.model('Hall', hallSchema);

module.exports = Hall;
