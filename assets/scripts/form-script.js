const submitButton = document.getElementById("submit");
const petName = document.getElementById("petName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const animalChoice = document.querySelector("input[type=radio]").checked;

function submitData() {

    const fullName = `${firstName.value} ${lastName.value}`;

    localStorage.setItem("AdopterName", fullName);
    localStorage.setItem("petName", petName.value);
}


submitButton.addEventListener("click", submitData);