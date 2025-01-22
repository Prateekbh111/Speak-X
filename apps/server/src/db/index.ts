import mongoose from "mongoose";

async function connectToDB(url: string) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.log("MONGODB connection failed ", err);
    process.exit(1);
  }
}

export default connectToDB;
