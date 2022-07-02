
// auto id


// make data
let students = [
  {
    id: 1,
    name: "Caydaruus Maxamed",
    school: "Hargeisa School",
    grade: "A",
    age: "20",
  },
  {
    id: 2,
    name: "Maxamed Ahmed",
    school: "SOS School",
    grade: "C",
    age: "20",
  },
  {
    id: 3,
    name: "Sharmark Ismaciil",
    school: "Noradin School",
    grade: "D",
    age: "18",
  },
  {
    id: 4,
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
    const newstudent = {id: Date.now(),name,school,grade,age};
    students.push(newstudent)
    return newstudent;
  },
  
  async update(id,change){
    const updateStudent = {id,...change}
    students = students.map(student => student.id === id ? updateStudent : student);
    return updateStudent;
  },
  
  async delete(id){
    const student = students.find(student => student.id === +id);
    students = students.filter(student => student.id !== id)
    return student;
  }
};


// cors not post 
// your local host 
// server 

// policy haddii aad data ka codsato local hostiga ku jirta server internetka ku jira ma shaqaynasyso waa in aad meel ku wada jirtaan server ama local host 

// waa in aad header ku dardaa 