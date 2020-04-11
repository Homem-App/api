const yup = require('yup');

const schema = yup.object().shape({
  title: yup.string().required(),
  summary: yup.string().required(),
  photo: yup.string().required(),
  link: yup.string().required(),
  interactions: yup.array().required()
});

function validate (params) {
  return schema.validate(params);
}

module.exports = validate;