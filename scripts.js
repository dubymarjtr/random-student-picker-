const students = [];
const form = document.querySelector("form");
const p = document.querySelector("p");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /**
   * 1. event.target is the form that got submitted
   * 2. FormData uses values and name attributes from the form
   * 3. Create a new object from the entries in the form
   */
  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});

document.querySelector(".button--jumbo").addEventListener("click", () => {
  const randomName = students[getRandomIntInclusive(0, students.length - 1)];

  p.innerText = `${randomName.fname} ${randomName.lname}`;
});

const root = document.querySelector(":root");
const inputFont = document.querySelector("input");
document.querySelector("#test").addEventListener("click", () => {
  root.style.setProperty("--background-color", "#2A272A"); /* background page */
  root.style.setProperty("--primary-color", "#4B4A54"); /* form color */
  root.style.setProperty("--input-color", "#4B4A54");
  root.style.setProperty("--border-color", "#939393");
  root.style.setProperty("--heading-color", "#939393");
  root.style.setProperty("--button-color", "#505050");
  root.style.setProperty("--button-reset", "#505050");
  root.style.setProperty("--button-text", "#CF9EAC");
  root.style.setProperty("--button-text-reset", "#D3FBD8");
  root.style.setProperty("--placeholder-color", "#CF9EAC");
  root.style.setProperty("--button-jumbo", "#564147");
});
