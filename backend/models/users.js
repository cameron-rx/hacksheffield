import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    auth0Id: { type: String, required: true, unique: true }, // Unique Auth0 user ID
    email: { type: String, required: true, unique: true },  // Email from Auth0
    name: { type: String },                                 // User's name
    joinedAt: { type: Date, default: Date.now },            // When the user joined
});
  
userSchema.set('toObject', {getters: true, virtuals: true});
const userModel = mongoose.model('users', userSchema);

export const userCreate = async function(data) {
   const dbResponse = await userModel.create(data) 
   return dbResponse;
}

export const userDelete = async function(userID) {
    const dbResponse = await userModel.deleteOne({auth0Id: userID})
    return dbResponse;
}

export const userUpdate = async function(userID, updatedUser) {
    const update = userModel.updateOne({auth0Id: userID}, updatedUser)
    return update;
}


export const userGet = async function(userID) {
    const user = await userModel.findOne({auth0Id: userID})
    return user;
}
