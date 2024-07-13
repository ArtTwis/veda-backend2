import mongoose from "mongoose";
import { DB_NAME } from "../constants/common.js";

const connectDb = async () => {
  try {
    const mongoDbConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `Connected to MongoDb successfully, DB host :`,
      mongoDbConnectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error while connecting to db :", error);
    process.exit(1);
  }
};

export default connectDb;
