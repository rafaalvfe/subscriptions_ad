import { validationResult } from 'express-validator';

const validator = (validators) => {
  return [
  ...validators,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  }]
};

export default validator;