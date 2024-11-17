import {habitGetOne, habitGetAll, habitUpdate, habitCreate, habitDelete} from "../models/habits.js"


export const createHabitTest = async function() {
    console.log("Testing creating user")
    const dbRepsonse = await habitCreate({
        userID: "2132432435",
        title: "Gym",
        description: "Workout to improve physical health",
        frequency: "weekly",
        dates: [Date.now(), Date.now()],
        include: true
    });
    console.log("Creating Habit Response: \n"+ dbRepsonse)
}

export const getAllHabitTest = async function() {
    console.log("Testing getting user")
    const dbResponse = await habitGetAll("ID:1000")
    console.log("Get Response from server: \n" + dbResponse)
}
