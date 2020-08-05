const mongoose = require('mongoose')

var db = mongoose.connect("mongodb+srv://dbUser:dbUser12345678@cluster0.euikj.mongodb.net/<dbname>?retryWrites=true&w=majority",()=>{
  console.log('database connected');
})

var userSchema = new mongoose.Schema({
  date:Date,
  completedChat:Boolean,
  useragent:String,
  csrfToken:String,
  userInput:String,
  botOutput:String
})

module.exports = mongoose.model("User",userSchema)
