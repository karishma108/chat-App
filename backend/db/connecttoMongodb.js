import mongoose from "mongoose";

const connectToMongodb = async () => {
    try{
    await mongoose.connect(process.env.mongo_db_uri);
    console.log(" connected to monogdb");
    } catch (error) {
        console.log("error connecting to mongodb", error.message);
    }
};

export default connectToMongodb;