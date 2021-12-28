import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.Promise = global.Promise;
dotenv.config();

const { MONGODB_URI, MONGODB_DB } = process.env;

const connectToDatabase = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
  };

  await mongoose.connect(
    `${MONGODB_URI}/${MONGODB_DB}`,
    options
  );
};

export { connectToDatabase };