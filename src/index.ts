import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import photoRoutes from './routes/photoRoutes';
import orderRoutes from './routes/orderRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/photos', photoRoutes);
app.use('/api/orders', orderRoutes);
// console.log({MONGODB_URI: process.env.MONGODB_URI})
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!, {
    // useNewUrlParser: true, // Add this line if you're using Mongoose < 6.x
    // useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
