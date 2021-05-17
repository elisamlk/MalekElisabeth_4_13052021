// Element du DOM
const form = document.querySelector(".form");
let regex = /^[A-Za-z0-9]{1,}/;
let firstName = document.getElementById("first");
let firstError = document.querySelector(".first-error");
let lastName = document.getElementById("last");
let lastError = document.querySelector(".last-error");
let email = document.getElementById("email");
let emailError = document.querySelector(".email-error");
let emailRegex = /.+@.+\..+/;
let birthdate = document.getElementById("birthdate");
let birthdateError = document.querySelector(".birthdate-error");
let tournamentNumber = document.getElementById("quantity");
let tournamentNumberError = document.querySelector(".tournament-error");
let city = document.getElementsByName("location");
let cityError = document.querySelector(".city-error");
console.log(city);

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

function checkEmail() {
  if (email.value.trim() == "") {
    email.style.borderColor = "red";
    emailError.innerHTML = "Le format attendu n'est pas correct.";
    return false;
  }
  return true;
}

function checkBirthdate() {
  if (birthdate.value.trim() == "") {
    birthdate.style.borderColor = "red";
    birthdateError.innerHTML = "Veuillez renseigner votre date de naissance.";
    return false;
  }
  return true;
}

function checkTournamentNumber() {
  if (tournamentNumber.value.trim() == "") {
    tournamentNumber.style.borderColor = "red";
    tournamentNumberError.innerHTML = "Veuillez entrer un nombre.";
    return false;
  }
  return true;
}

function checkCity() {
  for (let i = 0; i < city.length; i++) {
    //console.log(city[i].checked);
    if (city[i].checked == true) {
      return true;
    }
  }
  cityError.innerHTML = "Veuillez sélectionner une ville.";
  return false;
}

form.addEventListener("submit", function (e) {
  if (
    checkFirstName() == false ||
    checkLastName() == false ||
    checkEmail() == false ||
    checkBirthdate() == false ||
    checkTournamentNumber() == false ||
    checkCity() == false
  ) {
    e.preventDefault();
  }
});
