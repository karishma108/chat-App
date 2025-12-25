
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Seted a timeout for initial connection
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error); // Log the full error object
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectToMongodb;


// import mongoose from "mongoose";

// const connectToMongodb = async () => {
//     try{
//     await mongoose.connect(process.env.mongo_db_uri);
//     console.log(" connected to monogdb");
//     } catch (error) {
//         console.log("error connecting to mongodb", error.message);
//     }
// };

// export default connectToMongodb;
