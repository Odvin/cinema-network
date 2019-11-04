const Cinema = require('./cinema');

const persistCinema = async cinema => {
  const cinemaInstance = new Cinema(cinema);
  await cinemaInstance.save();

  return {
    city: cinemaInstance.city,
    name: cinemaInstance.name,
  };
};

const findAllCinemas = async () => {
  // TODO: Pagination
  const cinemas = await Cinema.find({}, null, { lean: true });

  return cinemas;
}

module.exports = {
  persistCinema,
  findAllCinemas,
};
