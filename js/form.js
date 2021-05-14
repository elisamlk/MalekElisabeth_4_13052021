// Element du DOM
const form = document.querySelector(".form");
let regex = /^[A-Za-z0-9]{1,}/;
let firstName = document.getElementById("first");
let firstError = document.querySelector(".first-error");

function checkInfo() {
  if (firstName.value.trim() == "") {
    firstName.style.borderColor = "red";
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  return true;
}

form.addEventListener("submit", function (e) {
  if (checkInfo() == false) {
    e.preventDefault();
  }
});