const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var cors = require('cors');
const { Signup, Login } = require("./AuthController");
const { CreatePost} = require("./PostController");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
//mongodb://localhost:27017
const uri = "mongodb+srv://GreenVista:GreenVista123@cluster0.xswqdin.mongodb.net/?retryWrites=true&w=majority";
//const pgRouter = require('./databases/postgres.js')

mongoose.connect(uri)
.then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
//cors({ origin : [ "http://localhost:5174"]})
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/signup", Signup);

app.post("/login", Login);

app.post("/createPost", CreatePost);

app.get('/forumDataList', (req, res) => {
    console.log(req);
    res.send('Hello forumDataList!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
