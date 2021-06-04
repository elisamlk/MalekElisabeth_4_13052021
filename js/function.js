// Couleur à ajouter si les champs du formulaire sont corrects
function isValid(validColor, deleteMessage) {
    validColor.style.borderColor = "green";
    deleteMessage.style.display = "none";
}

// Couleur à ajouter si les champs dont erronnés 
function isNotValid(errorColor) {
    errorColor.style.borderColor = "#fe142f";
}
