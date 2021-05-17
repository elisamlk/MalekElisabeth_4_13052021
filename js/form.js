// Element du DOM
const form = document.querySelector(".form");

function checkFirstName() {
  let firstName = document.getElementById("first");
  let firstError = document.querySelector(".first-error");
  if (firstName.value.trim().length < 2) {
    firstName.style.borderColor = "#fe142f";
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  firstName.style.borderColor = "green";
  firstError.style.display = "none";
  return true;
}

function checkLastName() {
  let lastName = document.getElementById("last");
  let lastError = document.querySelector(".last-error");
  if (lastName.value.trim().length < 2) {
    lastName.style.borderColor = "#fe142f";
    lastError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  lastName.style.borderColor = "green";
  lastError.style.display = "none";
  return true;
}

function checkEmail() {
  let email = document.getElementById("email");
  let emailError = document.querySelector(".email-error");
  let emailRegex = /.+@.+\..+/;
  if (email.value.trim() == "") {
    email.style.borderColor = "#fe142f;";
    emailError.innerHTML = "Le format attendu n'est pas correct.";
    return false;
  }
  email.style.borderColor = "green";
  emailError.style.display = "none";
  return true;
}

function checkBirthdate() {
  let birthdate = document.getElementById("birthdate");
  let birthdateError = document.querySelector(".birthdate-error");
  if (birthdate.value.trim() == "") {
    birthdate.style.borderColor = "#fe142f";
    birthdateError.innerHTML = "Veuillez renseigner votre date de naissance.";
    return false;
  }
  birthdate.style.borderColor = "green";
  birthdateError.style.display = "none";
  return true;
}

function checkTournamentNumber() {
  let tournamentNumber = document.getElementById("quantity");
  let tournamentNumberError = document.querySelector(".tournament-error");
  if (tournamentNumber.value.trim() == "") {
    tournamentNumber.style.borderColor = "#fe142f";
    tournamentNumberError.innerHTML = "Veuillez entrer un nombre.";
    return false;
  }
  tournamentNumber.style.borderColor = "green";
  tournamentNumberError.style.display = "none";
  return true;
}

function checkCity() {
  for (let i = 0; i < city.length; i++) {
    console.log(city[i].checked);
    if (city[i].checked == true) {
      return true;
    }
  }
  cityError.innerHTML = "Veuillez sélectionner une ville.";
  return false;
}

function checkFormValidation(){
  let validation = document.getElementsByClassName(".validation");
  console.log(validation.isConnected);
  if(!validation.autofocus){
    return false;
  }
  return true;
}

checkFormValidation();




form.addEventListener("submit", function (e) {
  if (
    checkFirstName() == false ||
    checkLastName() == false ||
    checkEmail() == false ||
    checkBirthdate() == false ||
    checkTournamentNumber() == false 
    //checkCity() == false ||
    //checkFormValidation == false
  ) {
    e.preventDefault();
  }
});
