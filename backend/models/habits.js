import mongoose from "mongoose";

let Schema = mongoose.Schema;

const HabitSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },                                      
    description: { type: String },                                                
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true }, 
    createdAt: { type: Date, default: Date.now },
  });
