import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mahendrayadav37104:mahendra1234@cluster0.qrlquqf.mongodb.net/DoctorDatabase"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
