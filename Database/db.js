import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("Database is Connected"))
    .catch((err) => console.error("Database connection error: ", err));
};

export default connectDb;
