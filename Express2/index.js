// STEP ONE IMPERT EXPRESS
const express = require("express");
// 
//import model
const model = require("./model"); // to make CRUD U NEED a place to TO STORED THE DATA IS file is colled a module

// STEP TWO CREATE SERVER
const server = express();

// STEP THREE USE RESPONS AS JSON
server.use(express.json());

// STEP FOUR make port
const PORT = 3000;
const baseURI = "/api/students/";

// CREATE END POINT ...
server.get(baseURI, async (req, res) => {
  // get all student
  try {
    const students = await model.findAll();
    res.status(200).json(students);
  } catch {
    res.status(500).json({ message: "we can't find students" });
  }
});

server.get("/api/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await model.findById(id);
    if(!student) {
      res.status(404).json({ message: "student not found" });
    } else {
     res.status(200).json(student);
    }
  } catch (error) {
    res.status(500).json({ message: `we can't get a student ${id}` });
  }
});

server.post('/api/students/', async (req,res) => {
    const change = req.body
    try {
        const newStudent = await model.add_student(change);
        if(!newStudent.name){
            res.status(500).json({message : "pleas add the name of the student"})
        }else {
            res.status(200).json(newStudent);
        }
    } catch (error) {
          res.status(500).json({message : `we can't add the is student ${error}`})
    }
})

server.put('/api/students/:id', async (req,res) => {
    let changes = req.body
    let {id} = req.params
    
    try {
        const updateStudent = await model.update(id,changes)
        console.log(updateStudent);
        if(!updateStudent){
            res.status(500).json({message : "please add all requiredment"})
        }else{
        res.status(200).json(updateStudent)
        }
    } catch (error) {
        res.status(500).json({ message: `we can't update that student ${error}` });
    }
})

server.delete('/api/students/:id', async (req,res) =>  {
    let {id} = req.params;
    try {
        const deleteStudent = await model.delete(id)
        res.status(200).json(deleteStudent)
    } catch (error) {
        res.status(500).json({message: "we can't delete this student "})
    }
})
// LAST STEP LISINING
server.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});
