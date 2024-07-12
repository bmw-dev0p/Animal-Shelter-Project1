const submitButton = document.getElementById("submit");
const petName = document.getElementById("petName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
//const animalChoice = document.querySelector("input[type=radio]").checked;

function submitData(event) {
    event.preventDefault();

    const fullName = `${firstName.value} ${lastName.value}`;

    localStorage.setItem("AdopterName", fullName);
    localStorage.setItem("petName", petName.value);
    
    window.location.replace("./certificate.html")
}


submitButton.addEventListener("click", submitData);