import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

export default connectDB;

//We have a database inside the config file, so this keeps the database connection separate from the app logic server.js