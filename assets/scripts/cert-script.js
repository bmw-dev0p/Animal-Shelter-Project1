//declare variables
const customerEl = document.getElementById('customer-name');
const animalEl = document.getElementById('animal-name');
const signEl = document.getElementById('signature');
const dateEl = document.getElementById('date');
const backEl = document.getElementById('back');
const currentDate = new Date();
const dateFormatted = currentDate.toLocaleDateString('en-US');

//checks
console.log(currentDate);

function renderCert() {
    //pull data from local storage
    const storageName = localStorage.getItem('AdopterName'); 
    const storageAnimal = localStorage.getItem('petName');
    // ADD ANIMAL TYPE HERE ?
    //check if data is being pulled
    console.log(storageName);
    console.log(storageAnimal);
    //set html elements to the storage data
    customerEl.textContent = storageName;
    animalEl.textContent = storageAnimal;
    signEl.textContent = storageName;
    signEl.setAttribute('style', 'font-size: 2em');
    dateEl.textContent = dateFormatted;

}

//call function
renderCert();

//back button
backEl.addEventListener('click', function(event) {
    console.log('back button clicked');
    event.preventDefault();
    history.back();
    });