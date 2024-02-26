const mongoose = require('mongoose');
const user_model = require('./models/user')  ;



/** i would like to connect to mongodb
 * EVENT DRIVEN
 */

mongoose.connect("mongodb://localhost/mongo_db");
const db = mongoose.connection;
db.once("open", ()=>{
    console.log("yayi finally its connected");


    /**
     *  now its time to insert some document
     */

    init();
})

db.on("error", ()=>{
    console.log("error while connnecting to the database unfortunatelly !");
})


async function init(){
/**
 * logic to insert the document inside the DB
 */
const user_obj = {
    name : "vishwa",
    age : 99
}

// insert to inside the user collection
 try{
  const user = await user_model.create(user_obj);
  console.log("user created", user)
 }catch(error){
    console.log("Error while inserting" , error)
 }


}
