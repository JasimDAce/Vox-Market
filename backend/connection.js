const mongoose = require('mongoose');
require('dotenv').config();

const dbPass =process.env.db_password;
const dbName = process.env.db_name;
const url = `mongodb+srv://${dbName}:${dbPass}@cluster0.68lavsh.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url).then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;
