const { cinemaValidation } = require('../../../models/cinema');

const validateCinemaController = (req, res, next) => {
  const { city, name } = req.body;
  const isValid = cinemaValidation({ city, name });

  if (!isValid) {
    return res.status(400).json(cinemaValidation.errors);
  }

  return next();
};

module.exports = {
  validateCinemaController,
};
