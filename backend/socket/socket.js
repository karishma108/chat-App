
import { Server } from "socket.io";
import http from 'http';
import express  from "express";
// import { isBuffer } from 'util'; // Import isBuffer for conditional checks

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:["http://localhost:3000"],
        methods:['GET', 'POST'],
    },
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    
    // Check if Buffer is available before using it
   //  if (isBuffer(socket.request)) {
   //      // Use Buffer here
   //      // For example: const buffer = Buffer.from('some data');
   //  }

    const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

   io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
