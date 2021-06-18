'use strict';

//global variables ---------------------------------------------------------------------------------------------
let hoursOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let salesTableElem = document.getElementById('salesInfo');
let theadElem = document.createElement('thead');
salesTableElem.appendChild(theadElem);
let tbodyElem = document.createElement('tbody');
salesTableElem.appendChild(tbodyElem);
let tfootElem = document.createElement('tfoot');
salesTableElem.appendChild(tfootElem);

let locationFormElement = document.getElementById('addLocationForm');

let seattle =  new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// constructor function ---------------------------------------------------------------------------------------
function Store(location, minCustomer, maxCustomer, avgCookieSales) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSales = avgCookieSales;
}

//prototype methods ------------------------------------------------------------------------------------------
Store.prototype.stores = [];
Store.prototype.stores.push(seattle, tokyo, dubai, paris, lima);
Store.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}
Store.prototype.createSalesArray = function() {
  this.hourlySales = [];
  for (let i = 0; i < hoursOfDay.length; i++) {
    let sale = Math.floor(this.custPerHour() * this.avgCookieSales);
    this.hourlySales.push(sale);
  }
}

Store.prototype.renderStoreRow = function() {
  let dailyTotal = 0;

  let rowElem = document.createElement('tr');
  tbodyElem.appendChild(rowElem);
  let locationThElem = document.createElement('th');
  locationThElem.textContent = this.location;
  rowElem.appendChild(locationThElem)
  
  for (let i = 0; i < this.hourlySales.length; i++) {
    dailyTotal += this.hourlySales[i];
    const tdElem = document.createElement('td');
    tdElem.textContent = this.hourlySales[i];
    rowElem.appendChild(tdElem);
  }
  let tdElemTotal = document.createElement('td');
  tdElemTotal.textContent = dailyTotal
  rowElem.appendChild(tdElemTotal);
}

// global functions ---------------------------------------------------------------
function updateStoresWithSales(stores) {
  for (let i = 0; i < stores.length; i++) {
    stores[i].createSalesArray();
  }
}

function renderHeader() {
  let rowElem = document.createElement('tr');
  theadElem.appendChild(rowElem);
  let blankThElem = document.createElement('th');
  rowElem.appendChild(blankThElem);
  
  for (let i = 0; i < hoursOfDay.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = hoursOfDay[i];
    rowElem.appendChild(thElem);
  }
  let thElemTotals = document.createElement('th');
    thElemTotals.textContent = 'Totals'
    rowElem.appendChild(thElemTotals);
}

function renderAllStoreRows(stores) {
  for (let i = 0; i < stores.length; i++) {
    stores[i].renderStoreRow();
  }
}

function renderFooter() {
  let hourlyTotal = 0;
  let grandTotal = 0;
  
  let rowElem = document.createElement('tr');
  tfootElem.appendChild(rowElem);
  
  let blankThElem = document.createElement('th');
  blankThElem.textContent = 'Totals';
  rowElem.appendChild(blankThElem);

  for (let i = 0; i < hoursOfDay.length; i++) {
    for (let j = 0; j < Store.prototype.stores.length; j++) {
      let currentStoreAtCurrentHour = Store.prototype.stores[j].hourlySales[i];
      hourlyTotal += currentStoreAtCurrentHour;
    }
  
  let hourlyThElem = document.createElement('th');
  hourlyThElem.textContent = hourlyTotal;
  rowElem.appendChild(hourlyThElem);
  grandTotal += hourlyTotal;
  hourlyTotal = 0;
  }
  let grandThElem = document.createElement('th');
  grandThElem.textContent = grandTotal;
  rowElem.appendChild(grandThElem);
}

// create an event handler for the add a store form -------------------------------------
function  handleSubmit(event) {
  event.preventDefault();
  
  console.log(event.target.location.value, 'event target name');

  let location = event.target.location.value;
  let minCustomer = event.target.minCustomer.value;
  let maxCustomer = event.target.maxCustomer.value;
  let avgCookieSales = event.target.avgCookieSales.value;

  console.log(location, minCustomer, maxCustomer, avgCookieSales);

  let newStore = newStore(location, minCustomer, maxCustomer, avgCookieSales);

  console.log(newStore);

  newStore.custPerHour();
  //this line is incorrect. need help!
  newStore.renderStore();

  event.target.reset();
}

// call the functions --------------------------------------------------------------------
updateStoresWithSales(Store.prototype.stores);
renderAllStoreRows(Store.prototype.stores);
renderHeader();
renderFooter();
console.log(Store.prototype.stores);