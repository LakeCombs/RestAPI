const mongoose = required("mongoose");
const studentModel = require("../model/model");
const multer =require('multer');

//creating funncton for route
//function to create a new student

//creating a functoion to capture image
const storage = multer.diskStorage({
	destination: function (req,file, cb){
		cd(null, "destination")
	},
	filename:function(req,file,cb){
		cb(null, file.filename)
	}
})

const storage = multer.memoryStorage()
const upload = multer({storage:storage})

const newStudent = async (req, res) => {
	try {
		const student = await studentModel.create({
			name: req.body.name,
			course: req.body.name,
			picture: req.file.picture
		});
		res.status(200).json({ student });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//functionn to get all student
const getAllStudent = async (req, res) => {
	try {
		const allStudent = await studentModel.find();
		res.status(200).json({ allStudent });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//funtion to retrive the particular student
const getOneStudent = async (req, res) => {
	try {
		const oneStudet = await studentModel.findById(req.params.id);
		res.statu(500).json({ oneStudent });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//function to delete a student

const deleteStudent = async (req, res) => {
	try {
		// const deleteStudent = await studentModel.findByIdAndDelete(req.param.id)
		const deleteStudent = await studentModel.deleteOne(req.param.id);

		res.status(200).json({ message: "user has been deleted" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//function to delete all student

const deleteAllStudent = async (req, res) => {
	try {
        const del = await studentModel.deleteMany()
        res.status(200).json({message:"all student has been deleted"})
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//fucntion to update a student
const updateStudent = async (req,res)=>{
    try{
        const getId = await studentModel.findById(req.param.id)
        const updateNow = updateOne(getId)
        res.status(200).json({updateNow})
    }
    catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.export = { newStudent, getAllStudent, getOneStudent, deleteStudent,deleteAllStudent, updateStudent };
