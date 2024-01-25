const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const pgRouter = require('./databases/postgres.js')

app.use(cors());
//cors({ origin : [ "http://localhost:5174"]})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/forumDataList', (req, res) => {
    console.log(req);
    res.send('Hello forumDataList!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})