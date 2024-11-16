import express from "express";
import {userGet, userUpdate, userCreate, userDelete} from "../models/users.js"
import {habitCreate, habitDelete, habitUpdate, habitGetOne, habitGetAll} from "../models/habits.js"
let router = express.Router();

/*
ROUTE GET HABIT FROM DB

example fetch url http://localhost:5050/users/{userid}/habits 
where {userid} is id obtained from user post request

returns json object which contains array of all habits for that user
*/
router.get('/users/:userID/habits', async function(req, res, next) {
    const userID = req.params.userID;
    const habits = await habitGetAll(userID)

    if (!habits) {
        res.status(404).send("No habits for this user.")
    } else {
        res.status(201).json(habits);
    }
});

/*
ROUTE ADD HABIT TO DB

example fetch url http://localhost:5050/users/{userid}/habits 
where {userid} is id obtained from user post request

send in body json object
{
    title: title
    description: description
    frequency: frequency (options="weekly","daily","monthly")
}

returns db id for that habit
*/
router.post('/users/:userID/habits', async function(req, res, next) {
    const userID = req.params.userID;

    const data = req.body

    const habit = await habitCreate({
        userID: userID, // Unique Auth0 user ID
        title: data.title,                                      
        description: data.description,                                                
        frequency: data.frequency
    })

    if (habit) {
        req.status(200).json(habit.id)
    } else {
        req.status(505).send("Failed to create habit")
    }
})


/*
ROUTE DELETE HABIT FROM DB

example fetch url http://localhost:5050/users/{userid}/habits/{habitID}
where 
{userid} is id obtained from user post request
{habitID} is id obtained from posting habit 

send in body json object
{
    title: title
    description: description
    frequency: frequency (options="weekly","daily","monthly")
}

returns status based on whether delted or not
*/
router.delete('/users/:userID/habits/:habitID', async function(req,res,next){ 
    const userID = req.params.userID
    const habitID = req.params.habitID

    const deleteRequest = await habitDelete(userID, habitID)

    if (deleteRequest) {
        req.status(200).send("Habit deleted");
    } else {
        req.status(404).send("Habit not found/deleted")
    }

})

/*
ROUTE UPDATE HABIT IN DB

example fetch url http://localhost:5050/users/{userid}/habits/{habitID}
where 
{userid} is id obtained from user post request
{habitID} is id obtained from posting habit 

send in body json object any fields you want to update in the habit object

returns status based on whether updated or not
*/
router.put('/users/:userID/habits/:habitID', async function(req,res,next){
    const userID = req.params.userID;
    const habitID = req.params.habitID;

    const data = req.body

    const dbResponse = await habitUpdate(userID,habitID,data)

    if (dbResponse) {
        res.status(200).send("Habit updated.")
    } else {
        res.status(505).send("Error in updating habit.")
    }
})

/*
ROUTE ADD DATE TO HABIT IN DB

example fetch url http://localhost:5050/users/{userid}/habits/{habitID}/dates
where 
{userid} is id obtained from user post request
{habitID} is id obtained from posting habit 

send in body json object
{
    date: JS Date Object
}

returns status based on whether dates updated or not
*/
router.post("/users/:userID/habits/:habitID/dates", async function(req,res,next){
    const date = req.body.date
    const habitID = req.params.habitID
    const userID = req.params.userID

    const habit = await habitGetOne(userID, habitID)

    if (!habit) {
        req.status(404).send("Habit not found");
    }

    habit.dates.push(date)
    
    const dbResponse = await habit.save()

    if (dbResponse) {
        req.status(200).send("Updated dates.")
    } else {
        req.status(505).send("Updated changes couldnt be saved")
    }

}) 

/*
ROUTE DELETE DATE FROM HABIT IN DB

example fetch url http://localhost:5050/users/{userid}/habits/{habitID}/dates
where 
{userid} is id obtained from user post request
{habitID} is id obtained from posting habit 

send in body json object
{
    date: JS Date Object
}

returns status based on whether dates removed or not
*/
router.delete("/users/:userID/habits/:habitID/dates", async function (req,res,next) {
    const date = req.body.date
    const habitID = req.params.habitID
    const userID = req.params.userID

    const habit = await habitGetOne(userID, habitID)

    if (!habit) {
        req.status(404).send("Habit not found");
    }

    habit.dates.pop(date)
    
    const dbResponse = await habit.save()

    if (dbResponse) {
        req.status(200).send("Date removed.")
    } else {
        req.status(505).send("Date removal could not be saved")
    }

})


// Used for adding users to database and getting user uuid
router.post('/users', async function(req, res, next) {
    const userAuthID = req.body.ID

    const user = await userGet(userAuthID)

    if (!user) {
        const dbResponse = await userCreate({ 
            auth0Id: "ID:1000",
            email: "camjr246@yahoo.co.uk",
            name: "Cameron Robinson",
        })

        res.status(200).json({id: dbResponse._id, message: "User created in database"})
    } else {
        res.status(200).json({id: user._id, message: "User found in database"})
    }
});


export default router;