const router = require('express').Router();
const { seedCinema } = require('../../models/cinema');
const { cinemas } = require('../../models/seeds.json');

router.get('/', async (req, res, next) => {
  try {
    const response = await seedCinema(cinemas);

    return res.json({ response });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
