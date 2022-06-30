const nanoid = require("nanoid");

// auto id

const getId = () => {
  return nanoid.slice(0, 5);
};

// make data
let students = [
  {
    id: getId(),
    name: "Caydaruus Maxamed",
    school: "Hargeisa School",
    grade: "A",
    age: "20",
  },
  {
    id: getId(),
    name: "Maxamed Ahmed",
    school: "SOS School",
    grade: "C",
    age: "20",
  },
  {
    id: getId(),
    name: "Sharmark Ismaciil",
    school: "Noradin School",
    grade: "D",
    age: "18",
  },
  {
    id: getId(),
    name: "Maarig Saleebaan",
    school: "Qudhac dheer ",
    grade: "F",
    age: "23",
  },
];

module.exports = {
  async findAll() {
    return students; // GEY ALL STUDENT
  },

  async findById(id) {
    const student = students.find((student) => student.id === +id);
    return student;
  },

  async add_student({name,school,grade,age}) {
    const newstudent = {id: getId(),name,school,grade,age};
    students.push(newstudent)
    return newstudent;
  },
  
  async update(id,change){
    const student = students.findIndex(student => student.id === id);
    const updateStudent = {id,...student,}
    students = students.map(student => student.id === id ? updateStudent : student);
    return student
  },
  async delete(id){
    students = students.filter(student => student.id !== id)
    return this.findById(id);
  }
};


// cors not post 
// your local host 
// server 

// policy haddii aad data ka codsato local hostiga ku jirta server internetka ku jira ma shaqaynasyso waa in aad meel ku wada jirtaan server ama local host 

// waa in aad header ku dardaa 