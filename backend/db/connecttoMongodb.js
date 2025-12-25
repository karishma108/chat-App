import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Connected to MongoDB");
        console.log("Database Name:", mongoose.connection.db.databaseName);
        console.log("Connection Host:", mongoose.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectToMongodb;
