//creating an instance of express
const express = require('express')
require('dotenv').config();

const mongoose = require("mongoose")
const studentModel = require('./model/model')
const app = express()
const PORT = process.env.PORT

mongoose.connect('')


//use the app 
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`app is listening to ${PORT}`)
})