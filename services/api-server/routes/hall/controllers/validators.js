const { hallValidation } = require('../../../models/hall');

const validateHallController = async (req, res, next) => {
  const { cinemaId, name, seats } = req.body;

  const isValid = hallValidation({ cinemaId, name, seats });

  if (!isValid) {
    return res.status(400).json(hallValidation.errors);
  }

  return next();
};

module.exports = {
  validateHallController,
};
