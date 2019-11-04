const cinemaValidation = require('./validation');
const { persistCinema, findAllCinemas } = require('./operations');

module.exports = {
  persistCinema,
  findAllCinemas,
  cinemaValidation,
}