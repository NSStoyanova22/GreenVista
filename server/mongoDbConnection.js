const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const uri = process.env.MONGO_DB_URI;
module.exports.mongoConnect = mongoose.connect(uri);