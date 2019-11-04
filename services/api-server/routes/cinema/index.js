const router = require('express').Router();
const { persistCinemaController, findAllCinemasController } = require('./controllers');
const { validateCinemaController } = require('./controllers/validators');

router.get('/list', findAllCinemasController);

router.post('/', validateCinemaController, persistCinemaController);

module.exports = router;