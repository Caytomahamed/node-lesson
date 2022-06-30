// STEP ONE IMPERT EXPRESS
const express = require("express");

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
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: `we can't get a student ${id}` });
  }
});

// LAST STEP LISINING
server.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});
