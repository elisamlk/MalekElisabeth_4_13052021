// Element du DOM
let form = document.querySelector(".form");

// Fonctions pour vérifier si les champs sont correctement renseignés
let regexNumber = /^([^0-9]*)$/;
function checkFirstName() {
  let firstName = document.getElementById("first");
  let firstError = document.querySelector(".first-error");
  if (firstName.value.trim().length < 2 || !firstName.value.match(regexNumber)) {
    isNotValid(firstName);
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  isValid(firstName, firstError);
  return true;
}

function checkLastName() {
  let lastName = document.getElementById("last");
  let lastError = document.querySelector(".last-error");
  if (lastName.value.trim().length < 2 || !lastName.value.match(regexNumber)) {
    isNotValid(lastName);
    lastError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  isValid(lastName, lastError);
  return true;
}

function checkEmail() {
  let email = document.getElementById("email");
  let emailError = document.querySelector(".email-error");
  let emailRegex = /.+@.+\..+/;
  if (email.value.trim() == "" || !email.value.match(emailRegex)) {
    isNotValid(email);
    emailError.innerHTML = "Le format attendu n'est pas correct.";
    return false;
  }
  isValid(email, emailError);
  return true;
}

function checkBirthdate() {
  let birthdate = document.getElementById("birthdate");
  let birthdateError = document.querySelector(".birthdate-error");
  let birthdateRegex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
  if (birthdate.value.trim() == "" || !birthdate.value.match(birthdateRegex)) {
    isNotValid(birthdate);
    birthdateError.innerHTML = "Veuillez renseigner votre date de naissance.";
    return false;
  }
  isValid(birthdate, birthdateError);
  return true;
}

function checkTournamentNumber() {
  let tournamentNumber = document.getElementById("quantity");
  let tournamentNumberError = document.querySelector(".tournament-error");
  if (tournamentNumber.value.trim() == "" || isNaN(tournamentNumber.value.trim()) === true) {
    isNotValid(tournamentNumber);
    tournamentNumberError.innerHTML = "Veuillez entrer un nombre.";
    return false;
  }
  isValid(tournamentNumber, tournamentNumberError);
  return true;
}

function checkCity() {
  let city = document.getElementsByName("location");
  let cityError = document.querySelector(".city-error");
  for (let i = 0; i < city.length; i++) {
    if (city[i].checked == true) {
      cityError.style.display = "none";
      return true;
    }
  }
  cityError.innerHTML = "Veuillez sélectionner une ville.";
  return false;
}

function checkFormCondition() {
  let condition = document.getElementById("checkbox1");
  let conditionError = document.querySelector(".condition-error");
  console.log(condition.checked);
  if (!condition.checked == true) {
    conditionError.innerHTML = "Veuillez accepter les conditions d'utilisation";
    return false;
  }
  return true;
}

// Message de confirmation
function displayConfirmationMessage() {
  let confirmationMessage = document.querySelector(".container-message");
  form.style.display = "none";
  confirmationMessage.style.display = "block";
}

// Ecoute de l'évenement submit qui affiche le message de confirmation si touts les champs sont corrects
form.addEventListener("submit", function (e) {
  if (
    checkFirstName() == false ||
    checkLastName() == false ||
    checkEmail() == false ||
    checkBirthdate() == false ||
    checkTournamentNumber() == false ||
    checkCity() == false ||
    checkFormCondition() == false
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();
    displayConfirmationMessage();
  }
});
