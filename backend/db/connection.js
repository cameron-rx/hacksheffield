// db.js
import mongoose from "mongoose";

// Example for MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
