import express from "express";
import {userGet, userUpdate, userCreate, userDelete} from "../models/users.js"
let router = express.Router();

router.get('/users/:userID/habits', function(req, res, next) {
    console.log(req.params.userID)
    console.log(req.params.habitID)
    res.status(201).send("Yayy");
});

router.post('/users', async function(req, res, next) {
    const userAuthID = req.body.ID

    const user = await userGet()

    if (!user) {
        const dbResponse = await userCreate({ 
            auth0Id: "ID:1000",
            email: "camjr246@yahoo.co.uk",
            name: "Cameron Robinson",
        })

        res.status(201).json({id: dbResponse._id, message: "User created in database"})
    } else {
        res.status(201).json({id: user._id, message: "User found in database"})
    }
});


export default router;