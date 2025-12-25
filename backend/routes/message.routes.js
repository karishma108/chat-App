import express  from "express";
import { sendMessage, getMessages} from "../controllers/message.controller.js";
import protectRoute  from "../middleware/protectRoute.js";
import { messageUpload } from "../middleware/upload.js";


const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, messageUpload.single("file"), sendMessage);


export default router;