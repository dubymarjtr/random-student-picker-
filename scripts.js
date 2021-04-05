const students = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});
