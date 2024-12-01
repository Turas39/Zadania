class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.grades = []; 
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    calculateAverage() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  }
  class School {
    constructor() {
      this.students = [];
    }
  
    addStudent(name, age) {
      const newStudent = new Student(name, age);
      this.students.push(newStudent);
    }
  
    calculateAllAverages() {
      return this.students.map(student => { 
        const { name, age } = student;
        const average = student.calculateAverage();
        return { name, age, average };
      });
    }
  }

const mySchool = new School();

mySchool.addStudent("Janek", 21);
mySchool.addStudent("Agnieszka", 22);

mySchool.students[0].addGrade(5);
mySchool.students[0].addGrade(4);
mySchool.students[0].addGrade(3);

mySchool.students[1].addGrade(4);
mySchool.students[1].addGrade(4);
mySchool.students[1].addGrade(5);

const averages = mySchool.calculateAllAverages();

console.log(averages);
