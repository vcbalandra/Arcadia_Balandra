import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'; 
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// routers
import authRouter from './routes/auth.js';
import adminRouter from './routes/adminRouter.js';
import eventRouter from './routes/eventRouter.js';

// middleware
import { authenticateUser } from './middleware/authMiddleware.js';

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Calculate __dirname in ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Allow environment variable for CORS origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  
};

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors(corsOptions));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './Arcadia/dist')));
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Define routes
app.use('/admin', authenticateUser, adminRouter); // Admin routes
app.use('/auth', authRouter); // Auth routes
app.use('/event', eventRouter); // Event routes

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not found' });
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Connect to MongoDB and start the server
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}