import path from "path";
import  express  from 'express';
import dotenv from 'dotenv'; 
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongodb from './db/connecttoMongodb.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payleads (from req.body)
app.use(cookieParser());

app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);
app.use("/api/users" , userRoutes);

app.get("/", (req, res) => {
   res.send("Hellow worls!");
   
});

app.listen(PORT, () => {
    connectToMongodb();
    console.log(`server running on the port ${PORT}`)
});

