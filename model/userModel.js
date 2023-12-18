const mongoose = require("mongoose");
const uuid = require("uuid");
const userSchema = mongoose.Schema({
    id:{
        type:String,
        default:uuid.v4
        
    },
    username:{
        type:String,
        required:true
    },
    age:{
        type:number,
        required:true
    },
    hobbies:{
        type:[String],
        required:true
    },

})
module.exports = mongoose.model("User", userSchema)