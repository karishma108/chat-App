import  jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

const protectRoute = async (req, res, next) => {
  try {
  const token = req.cookies.jwt;
  if(!token) {
    res.status(400).json({ error:"unauthrized no  token provided" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if(!decoded) {
   return res.status(400).json({ error:"unauthrized no  token provided" });
  }
  
   const user = await User.findById(decoded.userId).select("password");

  if(!user) {
    return res.status(404).json({error: "User not found"});
  }

  req.user = user;

  next();

  } catch (error) {
    console.log("error in sendmeassge controller: ", error.message);
        res.status(500).json({ error:"internal server error" });
  }
}

export default protectRoute;
