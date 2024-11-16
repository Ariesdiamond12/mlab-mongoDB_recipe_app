import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/database.js";
import router from "./routes/api.js";

const app = express();
const PORT = process.env.PORT;

connectDB();
app.use(cors()); //enabling cors for all origins
app.use(express.json()); //handles all json incoming data
app.use('/api/v1', router)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
