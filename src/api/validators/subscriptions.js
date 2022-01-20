import { body } from 'express-validator';

const checkNewSubscription = [
  body('email').isEmail(),
  body('firstName').isAlpha().optional(),
  body('gender').isAlpha(),
  body('birthdate').isDate(),
  body('newsletterId').isNumeric(),
  body('consent').isBoolean(),
];

export {
  checkNewSubscription
};
