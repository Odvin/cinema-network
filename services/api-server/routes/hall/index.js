const router = require('express').Router();
const { persistHallController, findCinemaHallsController } = require('./controllers');
const { validateHallController } = require('./controllers/validators');

router.get('/list/:cinemaId', findCinemaHallsController);

router.post('/', validateHallController, persistHallController);

module.exports = router;