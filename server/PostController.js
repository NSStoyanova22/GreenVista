const Post = require("./PostModel");
const mongoose = require('mongoose');
module.exports.CreatePost = async (req, res, next) => {
  try {
    if(req && req.body) {
        
        const { imgUrl, username, challengeName, givenHeading } = req.body.data;
        console.log(req.body.data)
        const post = await Post.create({ imgUrl, username, challengeName, givenHeading });

        res
          .status(201)
          .json({ message: "Post created successfully", success: true, post });
        next();
    }
    else {
        console.log(req)
    }
    
  } catch (error) {
    console.error(error);
  }
};

module.exports.GetAllPosts = async (req, res, next) => {
  
  try {
    if(req) {
        
      const collection  = mongoose.connection.db.collection("posts");
      const posts = await collection.find({}).toArray(function(err, data){
          console.log(data); // it will print your collection data
      });

        res
          .status(201)
          .json({ message: "Posts", success: true, posts });
        next();
    }
    else {
        console.log(req)
    }
    
  } catch (error) {
    console.error(error);
  }
};
