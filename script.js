/*
*ASSIGNMENT:               Secure Exam Portal (Scope & Data Isolation)
Scenario 1
You are building a small online exam system.
Each student should have:
A name

A private score

The ability to:

submitAnswer(points)

getScore()
Requirements
The score must NOT be directly accessible from outside.

Each student must have their own independent score.

There must be a global variable called examTitle.

Inside your solution:

Use block scope somewhere meaningfully (let / const inside an if or loop).

Demonstrate that the global variable can be accessed but not overwritten.
const student1 = createStudent("Aisha");
const student2 = createStudent("Brian");

student1.submitAnswer(10);
student2.submitAnswer(5);

console.log(student1.getScore()); // 10
console.log(student2.getScore()); // 5

console.log(student1.score); // undefined
*/
const examinationTitle = "First Semester Exam";

function createStudent(name) {
  let score = 0;

  if (name) {
    const studentName = name; // Block scope variable for student name

    return {
      submitAnswer(points) {
        score += points;
      },
      getScore() {
        return score;
      },
    };
  }
}

//create students
const student1 = createStudent("Aisha");
const student2 = createStudent("Brian");

student1.submitAnswer(10);
student2.submitAnswer(5);

console.log(student1.getScore()); // 10
console.log(student2.getScore()); // 5

console.log(student1.score); // undefined
