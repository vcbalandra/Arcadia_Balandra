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

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  
};

app.use(cors(corsOptions));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
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
app.use('/admin', authenticateUser, adminRouter);
app.use('/auth', authRouter);
app.use('/add-event', authenticateUser, eventRouter);

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

// Error handler middleware
// app.use(errorHandlerMiddleware);

// Connect to MongoDB and start the server
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}