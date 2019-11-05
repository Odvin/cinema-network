const { persistHall, findCinemaHalls } = require('../../../models/hall');

const persistHallController = async (req, res, next) => {
  try {
    const { cinemaId, name, seats } = req.body;

    // TODO: Check that cinemaId is valid and exists

    const hall = await persistHall({ cinemaId, name, seats });

    return res.json(hall);
  } catch (e) {
    return next(e);
  }
};

const findCinemaHallsController = async (req, res, next) => {
  try {
    const { cinemaId } = req.params;

    // TODO: Check that cinemaId is valid and exists
    
    const halls = await findCinemaHalls(cinemaId);

    return res.json(halls);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  persistHallController,
  findCinemaHallsController,
};