import express from 'express';
import { register, logout } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';
import { createJWT } from '../utils/tokenUtils.js';
import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 requests per windowMs
  message: { msg: 'IP rate limit exceeded, retry in 15 minutes.' },
});

// Logout route
router.get('/logout', logout);

// Register route
router.post('/register', apiLimiter, validateRegisterInput, register);

// Login route
router.post('/login', apiLimiter, validateLoginInput, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: 'Email is invalid.' });
    }

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({ msg: 'Password is incorrect.' });
    }

    const token = createJWT({ userId: user._id, role: user.role });
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged in' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});


export default router;