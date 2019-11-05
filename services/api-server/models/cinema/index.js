const cinemaValidation = require('./validation');
const { persistCinema, findAllCinemas, findCinemaById } = require('./operations');

module.exports = {
  persistCinema,
  findAllCinemas,
  findCinemaById,
  cinemaValidation,
}