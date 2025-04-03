import express from 'express';
import multer from 'multer';
import { createEvent, getEvents } from '../controllers/eventController.js';
import { validateEventInput } from '../middleware/validationMiddleware.js'; 

const router = express.Router();

const upload = multer(); 

// Separate the .get() and .post() methods
router.get('/', getEvents);
router.post('/add-event', upload.single('eventImage'), validateEventInput, createEvent); // Add a path for .post()

export default router;