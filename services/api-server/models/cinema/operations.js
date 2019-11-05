const Cinema = require('./cinema');

const seedCinema = async (cinemas) => {
  await Cinema.deleteMany({});
  await Cinema.insertMany(cinemas);

  return 'Database seeding is done';
}

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

const findCinemaById = async cinemaId => {
  return await Cinema.findById(cinemaId, null, { lean: true });
} 

module.exports = {
  persistCinema,
  findAllCinemas,
  findCinemaById,
  seedCinema,
};
