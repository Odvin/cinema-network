require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const BASE_URL = process.env.BASE_URL || '/api/v1';
const API_SERVER_PORT = process.env.API_SERVER_PORT || 4000;
const MONGO_SERVER_HOST = process.env.MONGO_SERVER_HOST || 'mongo';
const MONGO_SERVER_PORT = process.env.MONGO_SERVER_PORT || 27017;
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'cinemaNet';

const app = express();

app.use(bodyParser.json());

app.use(`${BASE_URL}/cinema/`, require('./routes/cinema'));

app.use(`${BASE_URL}/seed/`, require('./routes/seed'));

app.get('/', (req, res) => res.send('Hello World!'));

db.connect(
  `mongodb://${MONGO_SERVER_HOST}:${MONGO_SERVER_PORT}/${MONGO_DATABASE}`,
  {
    useCreateIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    reconnectInterval: 10000,
    reconnectTries: Number.MAX_VALUE,
  }
);

db.connection.on('error', e => {
  console.error(`Mongo connection ERROR :: ${e}`);
});

app.listen(API_SERVER_PORT, () =>
  console.log(`API-server is listening on the port :: ${API_SERVER_PORT}`)
);
