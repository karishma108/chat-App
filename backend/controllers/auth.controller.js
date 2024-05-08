import bcrypt from "bcryptjs";
import User from "../models/usermodel.js";
import generateTokenAndSetCookie from "../utls/generatetoken.js";

// for signup
export const signup = async (req ,res) => {
   try{
   const {fullName, username, password, confirmPassword, gender} = req.body;
   

   if(password !== confirmPassword){
    return res.status(400).json({error:"passwords do not match"})
   }

   const user = await User.findOne({username});

   if(user) {
    return res.status(400).json({error:"username already exists"})
   }

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);

   const boyprofilePic = `https://img.freepik.com/premium-photo/face-boy-cartoon-style-ai-generated_690082-7672.jpg?username=${username}`
   const girlprofilePic = `https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg?username=${username}`
   
   const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === "male" ? boyprofilePic : girlprofilePic
   })

   if(newUser){
    // generate JWT token  here 
   generateTokenAndSetCookie(newUser._id, res);
   await newUser.save();

   res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    username: newUser.username,
    gender: newUser.gender,
    profilePic: newUser.profilePic,
   });
 }else {
    res.status(400).json({ error: "invalid user data"});
}
   } catch (error) {
    console.log("ERROR in signup controller", error.message);
    res.status(500).json({error:"internal server error"});
   }
};

// for login
export const login = async (req, res) => {
    try {
      const {username, password} = req.body;
      const user = await User.findOne({username});
      const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

      if(!user || !isPasswordCorrect) {
        return res.status(400).json({error: "invalid username or password"});
      }

      generateTokenAndSetCookie(user._id, res);

      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        gender: user.gender,
        profilePic: user.profilePic,
       });
     } catch (error) {
        console.log("ERROR in login controller", error.message);
        res.status(500).json({error:"internal server error"});
    }
};

// for logout
export const logout = (req, res) => {
   try{
    res.cookie("jwt", "", {maxAge:0 });
    res.status(200).json({ message: "loggend out successfully"});
   } catch (error) {
    console.log("ERROR in login controller", error.message);
        res.status(500).json({error:"internal server error"});
   }

};