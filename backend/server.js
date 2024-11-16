import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js";
import {createUserTest, getUserTest, updateUserTest, deleteUserTest} from "./scripts/tests.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

await connectDB()
await createUserTest();
await getUserTest();
await updateUserTest();
await deleteUserTest();


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});