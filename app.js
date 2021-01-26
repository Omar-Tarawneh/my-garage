// ========= 
// Global Variables
// =========
var cars = ['toyota.png', 'tesla.png', 'lexus.png', 'kia.png', 'hyundai.png', 'chevrolet.png', 'bmw.png'
]
var carObjects = [];

const form = document.getElementById('car-form');
const table = document.getElementById('car-table');


// =========
// constructor funciton
// =========

function Car(name, model, year) {
    this.name = name;
    // this.path = `img/${path}`;
    this.model = model;
    this.year = year
    carObjects.push(this);
}
// prototype functions
// render the data from the object
Car.prototype.render = function () {
    var tableRow = document.createElement('tr');
    var path;
    for (let index = 0; index < cars.length; index++) {
        if (this.model == cars[index].split('.')[0]) {
            path = `img/${cars[index]}`
        }
    }

    var tableDataImg = document.createElement('td');
    var img = document.createElement('img');
    img.setAttribute('src', path);
    tableDataImg.appendChild(img);
    tableRow.appendChild(tableDataImg);

    var tableDatatxt = document.createElement('td');
    tableDatatxt.textContent = `Car name: ${this.name} Model Year: ${this.year}`;
    tableRow.appendChild(tableDatatxt);

    table.appendChild(tableRow);

}



// ==========
// funcitons
// ==========

// get the data from the user
function carData(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var model = event.target.model.value;
    var year = event.target.year.value;
    var carObj = new Car(name, model, year);
    carObj.render();
    localStorage.setItem('cars', JSON.stringify(carObjects));
}
// restore data from local storage and  render them
function restorData() {
    if (localStorage.getItem('cars')) {
        var cars = JSON.parse(localStorage.getItem('cars'));
        for (let index = 0; index < cars.length; index++) {
            var carObj = new Car(cars[index].name, cars[index].model, cars[index].year)
            carObj.render();
        }

    }
}


// ===========
// calling and event listeners
// ==========
form.addEventListener('submit', carData);
restorData();