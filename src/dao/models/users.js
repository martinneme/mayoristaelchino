import mongoose from "mongoose";
const userscollection = "users";

const usersSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'USER',
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
    lastConnection:{
        type:Date,
        default:Date.now
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    market:{
        type:String,
        required:true
    },
    marketAddress:{
        type:String,
        required:true
    },


});




export const usersModel = mongoose.model(userscollection,usersSchema);