import express from 'express';
import multer from 'multer';
import { createEvent, getEvents } from '../controllers/eventController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },  
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type'), false);
      }
    }
  });

// Routes
router.get('/', authenticateUser, getEvents); 
router.post('/add-event', upload.single('eventImage'), createEvent);
router.get('/all-events',authenticateUser, getEvents);

export default router;