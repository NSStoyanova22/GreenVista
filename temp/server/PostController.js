const Post = require("./PostModel");


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
