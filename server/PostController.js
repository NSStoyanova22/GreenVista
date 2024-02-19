const Post = require("./PostModel");
const User = require("./UserModel");
const mongoose = require('mongoose');
const ObjectId = require("mongoose").Types.ObjectId;
module.exports.CreatePost = async (req, res, next) => {
  try {
    if(req && req.body) {
       //const photo = req.body.data.userPhoto ? req.body.data.userPhoto : '';
        const { created_at, imgUrl, username, challengeName, givenHeading, userId, userPhoto } = req.body.data;
        //console.log(req.body.data)
        const post = await Post.create({ created_at, imgUrl, username, challengeName, givenHeading, userId, userPhoto });
 
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
 
module.exports.GetAllPostsByUser = async (req, res, next) => {
 
  try {
    if(req && req.body && req.body.id) {
    const userId = req.body.id;
    //console.log(req.body)
    const collection  = mongoose.connection.db.collection("posts");
    const result = await collection.find({userId: userId}).toArray(function(err, data){
  });
    //console.log(result)
    if (result.length > 0) {
      res.send({postsLength: result.length});
    } else {
      res.send({postsLength: 0});
    }
  }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong, check logs");
  }
};
 