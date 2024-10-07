const express= require('express');
const mongoose=require('mongoose');

const app=express(); //initialize the express instance 
mongoose.connect("mongodb://localhost:27017/Learning",{useNewUrlParser:true,useUnifiedTopology:true});

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    }
});
 
const User= mongoose.model('user',userSchema);
app.get('/getUsers',(req,res)=>{
    User.find({}).then((users)=>{
        res.json(users);
    }).catch((err)=>{
        console.log(err);
    })
})