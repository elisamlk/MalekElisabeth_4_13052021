// Element du DOM
const form = document.querySelector(".form");
let regex = /^[A-Za-z0-9]{1,}/;
let firstName = document.getElementById("first");
let firstError = document.querySelector(".first-error");
let lastName = document.getElementById("last");
let lastError = document.querySelector(".last-error");
let email = document.getElementById("email");
let emailError = document.querySelector(".email-error");
let birthdate = document.getElementById("birthdate");
let birthdateError = document.querySelector(".birthdate-error");

function checkFirstName() {
  if (firstName.value.trim() == "") {
    firstName.style.borderColor = "red";
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  return true;
}

function checkLastName() {
  if (lastName.value.trim() == "") {
    lastName.style.borderColor = "red";
    lastError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  return true;
}

function checkEmail() {};

function checkBirthdate(){};

form.addEventListener("submit", function (e) {
  if (checkFirstName() == false != checkLastName() == false) {
    e.preventDefault();
  }
});
