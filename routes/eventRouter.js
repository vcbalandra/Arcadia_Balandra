import express from 'express';
import multer from 'multer';
import { createEvent, getEvents } from '../controllers/eventController.js'; 
import { validateEventInput } from '../middleware/validationMiddleware.js'; // Authentication middleware

const router = express.Router();

// Set up multer to handle image uploads
const multer = require('multer');
const upload = multer();  // Set up multer for handling the file upload

app.post('/add-event', upload.single('eventImage'), createEvent); 


export default router;