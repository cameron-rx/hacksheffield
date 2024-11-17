import {userGet, userUpdate, userCreate, userDelete} from "../models/users.js"


export const createUserTest = async function() {
    console.log("Testing creating user")
    const dbRepsonse = await userCreate({
        auth0Id: "ID:1000",
        email: "camjr246@yahoo.co.uk",
        name: "Cameron Robinson",
    });
    console.log("Creating User Response: "+ dbRepsonse)
}

export const getUserTest = async function() {
    console.log("Testing getting user")
    const dbResponse = await userGet("ID:100")
    console.log("Get Response from server: \n" + dbResponse)
}

export const updateUserTest = async function() {
    console.log("Testing updating user");
    const dbResponse = await userUpdate("ID:1000", { email: "02camrobison@gmail.com"
    });
    console.log("Update Response from server: \n" + dbResponse);
}

export const deleteUserTest = async function() {
    console.log("Testing deleting user");
    const dbResponse = await userDelete("ID:1000");
    console.log("Delete Response from server: " + dbResponse);
}