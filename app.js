// ========= 
// Global Variables
// =========
var cars = ['toyota.png', 'tesla.png', 'lexus.png', 'kia.png', 'hyundai.png', 'chevrolet.png', 'bmw.png'
]
var carObjects = [];

const form = document.getElementById('car-form');


// =========
// constructor funciton
// =========

function Car(name, path, model, year) {
    this.name = name;
    this.path = `img/${path}`;
    this.model = model;
    this.year = year
    carObjects.push(this);
}

// ==========
// funcitons
// ==========
function carData(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var model = event.target.model.value;
    var year = event.target.year.value;


}





// ===========
// calling and event listeners
// ==========
form.addEventListener('submit', carData);