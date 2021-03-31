const students = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});

// Part of homework 9
// document.querySelector("#fname").addEventListener("focus", (e) => {
//   e.preventDefault();
//   console.log("Entered input!");
// });

// document.querySelector("#lname").addEventListener("blur", (e) => {
//   e.preventDefault();
//   console.log("Left input!");
// });

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Submitted form!");
// });
