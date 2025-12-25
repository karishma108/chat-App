import User from "../models/usermodel.js";

export const getUsersForSidebar = async (req, res) => {
    try {

     const loggedInUserId = req.user._id;

     const filterUsers = await User.find({ _id: {$ne: loggedInUserId}}).select("-password");

     res.status(200).json(filterUsers);

    } catch (error) {
        console.error("error in getUserForSidebar: ", error.message)
        res.status(500).json({error: "internal server error"});
    }
}

export const updateProfileAvatar = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: "No image uploaded" });
        }

        const profilePicUrl = `/uploads/avatars/${file.filename}`;

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { profilePic: profilePicUrl },
            { new: true }
        ).select("-password");

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("error in updateProfileAvatar: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}