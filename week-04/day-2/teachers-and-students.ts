class Student {

  name: string;

  constructor(name: string = 'Bözse') {
    this.name = name;
  }

  learn() {
    console.log(`${this.name} starts learning`);
  }

  question(teacher: Teacher) {
    teacher.answer(this);
  }
}

class Teacher {

  name: string;

  constructor(name: string = 'Tanár bácsi') {
    this.name = name;
  }

  teach(student: Student) {
    student.learn();
  }

  answer(student: Student) {
    console.log(`${this.name} answers ${student.name}'s question`);
  }
}

let student1 = new Student('Maris');
let student2 = new Student;

let teacher1 = new Teacher('Béla bá');
let teacher2 = new Teacher;

teacher1.teach(student1);
student1.question(teacher2);
