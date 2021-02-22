const express = require('express');
const {newStudent, getAllStudent, getOneStudent, deleteStudent,deleteAllStudent, updateStudent} = require('../Controller/Controller');
const router = express.Router();

//to map the multar picture
// router.post

//mappping out the route
router.post('/students', newStudent);

router.get('/students', getAllStudent)

router.get('/students/:id', getOneStudent)

router.delete('/students/:id', deleteStudent)

router.delete('/students', deleteAllStudent)

router.put('/students/:id', updateStudent)

module.exports = router;
