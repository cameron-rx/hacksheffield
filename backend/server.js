import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js";
import {createUserTest, getUserTest, updateUserTest, deleteUserTest} from "./scripts/testUsers.js"
import {createHabitTest, getAllHabitTest} from "./scripts/testHabits.js"
import indexRouter from './routes/routes.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);

await connectDB()


/* Testing user db interaction
await createUserTest();
await getUserTest();
await updateUserTest();
await deleteUserTest();
*/

/* Testing habit db interaction
await getAllHabitTest();
await createHabitTest();
*/

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});