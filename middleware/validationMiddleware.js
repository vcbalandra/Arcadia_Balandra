import { body, validationResult  } from 'express-validator';
import {
  BadRequestError,
 
} from '../errors/customErrors.js';
import User from '../models/User.js';
import Event from '../models/Event.js';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateRegisterInput = [
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('location').notEmpty().withMessage('location is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
  handleValidationErrors, 
];

export const validateLoginInput = [
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
  handleValidationErrors, 
];

export const validateUpdateUserInput = [
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists');
      }
    }),

  body('location').notEmpty().withMessage('location is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
  handleValidationErrors, 
];


export const validateEventInput = [
  body('title')
    .notEmpty()
    .withMessage('Event title is required')
    .isLength({ min: 5 })
    .withMessage('Event title must be at least 5 characters long'),

  body('description')
    .notEmpty()
    .withMessage('Event description is required')
    .isLength({ min: 10 })
    .withMessage('Event description must be at least 10 characters long'),

  body('eventImage') 
    .optional()
    .isURL()
    .withMessage('Event image must be a valid URL if provided'),
];