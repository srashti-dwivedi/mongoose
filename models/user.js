/**
 * logic to create user collection
 * logic to define the user schema of user collection
 */
const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    name: String,
    age : Number
})

 module.exports = -mongoose.model("user" , userSchema)