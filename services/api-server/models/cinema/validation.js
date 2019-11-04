const Ajv = require('ajv');

const cinemaSchema = {
    type: 'object',
    required: [
      'city',
      'name',
    ],
    properties: {
      city: { type: 'string' },
      name: { type: 'string' },
    },
    additionalProperties: false,
};

const ajv = new Ajv();
const cinemaValidation = ajv.compile(cinemaSchema);

module.exports = cinemaValidation;