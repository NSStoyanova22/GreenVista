const Post = require("./PostModel");
const mongoose = require('mongoose');
module.exports.CreatePost = async (req, res, next) => {
  try {
    if(req && req.body) {
        
        const { created_at, imgUrl, username, challengeName, givenHeading } = req.body.data;
        //console.log(req.body.data)
        const post = await Post.create({ created_at, imgUrl, username, challengeName, givenHeading });

        res
          .status(201)
          .json({ message: "Post created successfully", success: true, post });
        next();
    }
    else {
        //console.log(req)
    }
    
  } catch (error) {
    console.error(error);
  }
};

module.exports.DeletePost = async (req, res, next) => {
  try {
    if(req && req.body && req.body.id) {
        
        const { id} = req.body;
        //console.log(req.body)
        const post = await Post.deleteOne({id: mongoose.Types.ObjectId.isValid(idgi)});

        res
          .status(201)
          .json({ message: "Post deleted successfully", success: true, post });
        next();
    }
    else {
        //console.log(req)
    }
    
  } catch (error) {
    console.error(error);
  }
};


module.exports.GetAllPosts = async (req, res, next) => {
  
  try {
    if(req) {
        
      const collection  = mongoose.connection.db.collection("posts");
      const posts = await collection.find({}).sort({created_at: -1}).toArray(function(err, data){
          console.log(data); 
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
