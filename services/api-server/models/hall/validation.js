const Ajv = require('ajv');

const hallSchema = {
    type: 'object',
    required: [
      'cinemaId',
      'name',
      'seats',
    ],
    properties: {
      cinemaId: { type: 'string'},
      name: { type: 'string' },
      seats: { type: 'number' },
    },
    additionalProperties: false,
};

const ajv = new Ajv();
const hallValidation = ajv.compile(hallSchema);

module.exports = hallValidation;