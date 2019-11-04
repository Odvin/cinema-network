const router = require('express').Router();
const { Cinema } = require('../../models/cinema');
const { cinemas } = require('../../models/seeds.json');

router.get('/', async (req, res, next) => {
  try {
    
    await Cinema.deleteMany({});
    await Cinema.insertMany(cinemas);

    return res.json({ response: 'Database seeding is done'});
  } catch (e) {
    return next(e);
  }
});

module.exports = router;