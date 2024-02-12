const User = require("./UserModel");
const { createSecretToken } = require("./SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    if(req && req.body) {
        
        const { email, password, username } = req.body.userData;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res
          .status(201)
          .json({ message: "User signed in successfully", success: true, user });
        next();
    }
    else {
        console.log(req)
    }
    
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
    try {
        if(req && req.body) {
            const { email, password } = req.body.userData;
            if(!email || !password ){
              return res.json({message:'All fields are required'})
            }
            const user = await User.findOne({ email });
            if(!user){
              return res.json({message:'Incorrect password or email' }) 
            }
            const auth = await bcrypt.compare(password,user.password)
            if (!auth) {
              return res.json({message:'Incorrect password or email' }) 
            }
             const token = createSecretToken(user._id);
             res.cookie("token", token, {
               withCredentials: true,
               httpOnly: false,
             });
             res.status(201).json({ message: "User logged in successfully", success: true, user: {username: user.username, email: user.email} });
             next()
        }
      
    } catch (error) {
      console.error(error);
    }
  }