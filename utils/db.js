import mongoose from "mongoose";

mongoose.set('strictQuery', false); 

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error; // Re-throw the error for higher-level handling
    }
};

export default connect;

