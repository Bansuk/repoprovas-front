import joi from 'joi';

const urlValidation =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/;

const examSchema = joi.object({
  name: joi.string().required(),
  examLink: joi.string().pattern(urlValidation).required(),
});

const isExamInputValid = body => {
  const isValid = examSchema.validate(body).error;
  const errorMessage = isValid && JSON.stringify(isValid.details[0].message);

  if (errorMessage?.includes('name')) {
    return {
      errorId: 1,
      errorMessage: 'O nome inserido não é válido.',
    };
  } else if (errorMessage?.includes('examLink')) {
    return {
      errorId: 2,
      errorMessage: 'O link inserido não é válido.',
    };
  }
};

export { isExamInputValid };
