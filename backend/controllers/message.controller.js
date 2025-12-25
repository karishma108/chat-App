import Conversation from "../models/conversation.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
    const { message } = req.body;
       const { id: receiverId } = req.params;
       const senderId = req.user._id;
    const file = req.file;

    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!file && !trimmedMessage) {
     return res.status(400).json({ error: "Message content is required" });
    }

       let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
       });

       if(!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        });
       }

    let messageType = "text";
    let fileUrl;
    let fileName;
    let fileSize;
    let fileMimeType;

    if (file) {
     const isImage = file.mimetype.startsWith("image/");
     messageType = isImage ? "image" : "file";
     fileUrl = `/uploads/messages/${file.filename}`;
     fileName = file.originalname;
     fileSize = file.size;
     fileMimeType = file.mimetype;
    }

    const newMessage = new Message({
     senderId,
     receiverId,
     message: trimmedMessage || undefined,
     messageType,
     fileUrl,
     fileName,
     fileSize,
     fileMimeType,
    });

       if(newMessage) {
        conversation.messages.push(newMessage._id);
       }
       
       await Promise.all([conversation.save(), newMessage.save()]);

       const receiverSocketId = getReceiverSocketId(receiverId);
       if(receiverSocketId) {
           io.to(receiverSocketId).emit("newMessage", newMessage);
       }

       res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
     const { id: userToChatId } = req.params;
     const senderId = req.user._id;

     const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] },
     }).populate("messages");

     if(!conversation) return res.status(200).json([]);

     const messages = conversation.messages;
     
     res.status(200).json(messages);
     
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};



