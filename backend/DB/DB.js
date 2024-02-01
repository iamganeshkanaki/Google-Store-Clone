const express =require('express');
const mongoose = require('mongoose');

const url = process.env.url;
mongoose.connect("mongodb://127.0.0.1:27017/GoogleStore").then(()=>{
    console.log('Connected!');
}).catch((err)=>{
    console.log('not Connected!'); 
})

