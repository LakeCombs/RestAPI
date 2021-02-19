const express = require('express')
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
})

const studentModel = mongoose.model('studentModel', studentSchema);

module.exports = studentModel;