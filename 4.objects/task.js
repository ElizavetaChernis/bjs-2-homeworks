function Student(name, gender, age) {
    // Ваш код
this.name = name;
this.gander = gender;
this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
this.subject = subjectName
}

// ваш код для остальных методов

let student1 = new Student("Ирина", "женский", "25");
let student2 = new Student("Александр", "мужской", "22");

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
  this.marks = [];
  this.marks.push(mark);
  } else {
  this.marks.push(mark);
  }
  }

  Student.prototype.addMarks = function (...mark) {
    if (this.marks === undefined) {
      this.marks = [];
      this.marks.push(...mark);
       } else {
      this.marks.push(...mark);
    }
  } 

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, item) => acc += item) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}