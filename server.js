//creating an instance of express
const express = require('express')
const mongoose = require('mongoose')
const router = express("./Router/route.js")
require('dotenv').config();

const studentModel = require('./model/model')
const app = express()
const PORT = process.env.PORT

const DB = "mongodb+srv://lakecombs:lakecombs@cluster0.tibgj.mongodb.net/StudentsDB?retryWrites=true&w=majority"

// mongoose.connect(process.env.MONGODB_URL, {
mongoose.connect(DB, {

    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
mongoose.connection.once('open',()=>{
    console.log("connected to datebase successfully...")
}).on('error', ()=>{
    console.log('Database connection failed...')
})

// mongoose.connect('')


//use the app 
app.use(express.json())
app.use('/api/', router)

app.listen(PORT, ()=>{
    console.log(`app is listening to ${PORT}`)
})