import mongoose from "mongoose";

mongoose.set('strictQuery', false); 

let mongoClient;

if (!process.env.MONGO) {
    throw new Error("Please add Mongo URI to env");
}

const connect = async () => {
    try {
        if (mongoClient) {
            return {mongoClient};
        }
        mongoClient = (await mongoose.createConnection(process.env.MONGO).asPromise()).getClient;
        console.log("Connected to MongoDB");
        return { mongoClient }
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error; // Re-throw the error for higher-level handling
    }
};

export default connect;