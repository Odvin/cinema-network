const mongoose = require('mongoose');

const { Cinema, cinemaValidation } = require('./cinema');

const models = {
  Cinema
}

const validations = {
  cinemaValidation,
}

module.exports = {
  models,
  validations,
  connect: mongoose.connect,
  connection: mongoose.connection,
  ObjectId: mongoose.Types.ObjectId,
};