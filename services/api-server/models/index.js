const mongoose = require('mongoose');

module.exports = {
  connect: mongoose.connect,
  connection: mongoose.connection,
  ObjectId: mongoose.Types.ObjectId,
};
