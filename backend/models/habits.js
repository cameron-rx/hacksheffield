import mongoose from "mongoose";


const HabitSchema = new mongoose.Schema({
    userID: { type: String, required: true}, // Unique Auth0 user ID
    title: { type: String, required: true },                                      
    description: { type: String },                                                
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true }, 
    dates: [{ type: Date }],
    includes: {type: Boolean, required: true, default: true}
  });

HabitSchema.set('toObject', {getters: true, virtuals: true});
const habitModel = mongoose.model('habits', HabitSchema);

export const habitCreate = async function(data) {
   const dbResponse = await habitModel.create(data) 
   return dbResponse;
}

export const habitDelete = async function(userID, habitID) {
    const dbResponse = await habitModel.deleteOne({userID: userID, _id: habitID})
    return dbResponse;
}

export const habitUpdate = async function(userID, habitID, updatedHabit) {
    const update = habitModel.updateOne({userID: userID, _id: habitID}, updatedHabit)
    return update;
}


export const habitGetOne = async function(userID, habitID) {
    const habit = await habitModel.findOne({userID: userID, _id: habitID})
    return habit;
}

export const habitGetAll = async function(userID) {
    const habits = await habitModel.find({userID: userID})
    return habits;
}