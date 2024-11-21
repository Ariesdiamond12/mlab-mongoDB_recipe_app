import "dotenv/config"; //this imports the config fuinction from dotenv package - it will automatically load the variables from the .env file
import express from "express";
import mongoose from "mongoose";
import cors from "cors"; //cross origin resource sharing - allows the server to accept requests from different domains
import connectDB from "./config/database.js";
import router from "./routes/api.js";

const app = express(); // create an instance of express app
const PORT = process.env.PORT || 3000; // getting the port from the environment variables

connectDB();
app.use(cors()); //enabling cors for all origins
app.use(express.json()); //handles all json incoming data
app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
