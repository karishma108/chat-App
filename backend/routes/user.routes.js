import  express  from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar, updateProfileAvatar } from "../controllers/user.controller.js";
import { avatarUpload } from "../middleware/upload.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)
router.patch("/profile", protectRoute, avatarUpload.single("avatar"), updateProfileAvatar);

export default router;