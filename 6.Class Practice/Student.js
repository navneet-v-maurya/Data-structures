class Student {
  constructor(firstname, lastname) {
    this.firstName = firstname;
    this.lastname = lastname;
    this.grades = [];
  }

  // this is an instance methods
  getFullName() {
    return `Your full name is ${this.firstName} ${this.lastname}`;
  }

  // this is a class method
  static toFailedStudents(...students) {
    console.log(students);
    for (let i = 0; i < students.length; i++) {
      students[i].grades.push("F");
    }
  }
  // this is also a class method
  static toPassedStudents(...students) {
    for (let i = 0; i < students.length; i++) {
      students[i].grades.push("P");
    }
  }
}

// instance creation of class student
const s1 = new Student("nav", "maurya");
const s2 = new Student("twinkle", "maurya");
const s3 = new Student("sam", "maurya");
const s4 = new Student("dev", "maurya");

//instance method call
console.log(s1.getFullName());
console.log(s2.getFullName());

//class method call
Student.toFailedStudents(s1, s2);
Student.toPassedStudents(s3, s4);

console.log(s1.grades, s2.grades, s3.grades, s4.grades);
