import express from 'express';
import { login, register, logout } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';
import jwt from 'jsonwebtoken'; // Import jwt for token generation
import User from '../models/User.js';

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

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' } 
    );

    res.cookie('token', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict', 
      maxAge: 24 * 60 * 60 * 1000, 
    });

    res.status(200).json({
      msg: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});


export default router;