const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true
    },

    desc:{
        type:String,
        required:true,
        unique:true
    },

    important:{
        type:boolean,
        default:false
    }  ,

    complete:{
        type:boolean,
        default:false
    }
} , {timestamps:true}); //to know the time

module.exports=mongoose.model('task' , userSchema);