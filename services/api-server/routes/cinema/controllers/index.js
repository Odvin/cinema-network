const { persistCinema, findAllCinemas } = require('../../../models/cinema');

const persistCinemaController = async (req, res, next) => {
  try {
    const { city, name } = req.body;

    const cinema = await persistCinema({ city, name });

    return res.json(cinema);
  } catch (e) {
    return next(e);
  }
};

const findAllCinemasController = async (req, res, next) => {
  try {
    const cinemas = await findAllCinemas();

    return res.json(cinemas);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  persistCinemaController,
  findAllCinemasController,
};
