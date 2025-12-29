
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.courses = [];
    this.scores = {};
  }

  // 📌 Basic info
  getInfo() {
    return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }

  // 📌 Update details
  updateAge(newAge) {
    this.age = newAge;
  }

  updateGrade(newGrade) {
    this.grade = newGrade;
  }

  // 📌 Courses
  enrollCourse(courseName) {
    if (!this.courses.includes(courseName)) {
      this.courses.push(courseName);
      this.scores[courseName] = [];
    }
  }

  dropCourse(courseName) {
    this.courses = this.courses.filter(course => course !== courseName);
    delete this.scores[courseName];
  }

  listCourses() {
    return this.courses.length > 0 ? this.courses : "No courses enrolled.";
  }

  // 📌 Scores
  addScore(courseName, score) {
    if (this.scores[courseName]) {
      this.scores[courseName].push(score);
    } else {
      console.log(`${this.name} is not enrolled in ${courseName}.`);
    }
  }

  getAverage(courseName) {
    if (!this.scores[courseName] || this.scores[courseName].length === 0) {
      return "No scores available.";
    }
    const sum = this.scores[courseName].reduce((a, b) => a + b, 0);
    return (sum / this.scores[courseName].length).toFixed(2);
  }

  // 📌 Performance
  getOverallAverage() {
    const allScores = Object.values(this.scores).flat();
    if (allScores.length === 0) return "No scores recorded.";
    const sum = allScores.reduce((a, b) => a + b, 0);
    return (sum / allScores.length).toFixed(2);
  }

  hasPassed(courseName, passMark = 50) {
    const avg = this.getAverage(courseName);
    if (isNaN(avg)) return "No scores to evaluate.";
    return avg >= passMark ? "Passed ✅" : "Failed ❌";
  }

  // 📌 Greetings
  greet() {
    return `Hello, my name is ${this.name} and I am in grade ${this.grade}.`;
  }
}










// Create a student
const student1 = new Student("Alice", 16, "10th Grade");

// Show info
console.log(student1.getInfo());  
// Alice, Age: 16, Grade: 10th Grade

// Update details
student1.updateAge(17);
student1.updateGrade("11th Grade");

// Enroll courses
student1.enrollCourse("Math");
student1.enrollCourse("Science");

// Add scores
student1.addScore("Math", 80);
student1.addScore("Math", 90);
student1.addScore("Science", 70);

// Show averages
console.log(student1.getAverage("Math"));       // 85.00
console.log(student1.getOverallAverage());      // 80.00
console.log(student1.hasPassed("Science"));     // Passed ✅

// List courses
console.log(student1.listCourses()); // ["Math", "Science"]

// Greeting
console.log(student1.greet());

