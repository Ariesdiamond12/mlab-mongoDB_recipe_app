import mongoose from "mongoose";

// its an async function that is responsible for establishing a db connection
const connectDB = async () => {
  try {  //I have a try block to catch any errors that might occur during the connection process
    const connection = await mongoose.connect(process.env.MONGO_URI);  // I'm using the mongoose.connect() method to connect to the db
    console.log(`MongoDB connected: ${connection.connection.host}`); // I'm logging a success message to the console
  } catch (error) {   // I have a catch block to catch any errors that might occur during the connection process
    console.log(`Error:${error}`);
  }
};

export default connectDB;

//We have a database inside the config file, so this keeps the database connection separate from the app logic server.js