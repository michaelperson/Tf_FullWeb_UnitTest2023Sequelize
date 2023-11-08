const yup = require('yup');
const { object } = require('yup');

const characterValidator = object({
    firstname: yup.string().min(1).max(50).required(),
    lastname: yup.string().min(1).max(50).required(),
    birthdate: yup.date(),
    gender: yup.string().max(1).required()
});

module.exports = characterValidator;