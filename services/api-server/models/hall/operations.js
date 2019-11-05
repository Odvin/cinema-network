const { ObjectId } = require('../index');
const Hall = require('./hall');

const persistHall = async hall => {
  const hallInstance = new Hall(hall);
  await hallInstance.save();

  return {
    cinemaId: hallInstance.cinemaId,
    name: hallInstance.name,
    seats: hallInstance.seats,
  };
};

const findCinemaHalls = async cinemaId => {
  // TODO: Pagination
  const cinemas = await Hall.find({ cinemaId: ObjectId(cinemaId) }, null, {
    lean: true,
  });

  return cinemas;
};

const findHallById = async hallId => {
  return await Hall.findById((hallId, null, { lean: true }));
} 

module.exports = {
  persistHall,
  findCinemaHalls,
  findHallById,
};
