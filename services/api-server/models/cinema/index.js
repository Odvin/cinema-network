const cinemaValidation = require('./validation');
const {
  persistCinema,
  findAllCinemas,
  findCinemaById,
  seedCinema
} = require('./operations');

module.exports = {
  persistCinema,
  findAllCinemas,
  findCinemaById,
  cinemaValidation,
  seedCinema
};
