'use strict';

//global variables for whole site ---------------------------------
let hoursOfDay = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

//create a constructor function for stores -------------------------------
function Store(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.hourlyCustomersArray = [];
  this.hourlyCookieSales = [];

  console.log('this', this);

  this.storeArray.push(this);
  console.log('this is the current version of the array', this.storeArray);
}

Store.prototype.storeArray = [];

Store.prototype.getHourlyCustomers = function() {
  this.hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
}

//for loops to generate store property arrays -------------------------------------
Store.prototype.getHourlyCustomersArray = function() {
  for (let i = 0; i < hoursOfDay.length; i++) {
    this.getHourlyCustomers();
    this.hourlyCustomersArray.push(this.hourlyCustomers);
  }
}

Store.prototype.getHourlyCookieSales = function() {
  for (let i = 0; i < this.hourlyCustomersArray.length; i++) {
    this.hourlyCookieSales.push(Math.floor(this.hourlyCustomersArray[i]*this.avgCookiesCustomer));
  }
}

//global function -------------------------------------------------------------
function renderStores() {
  for (let i = 0; i < Store.prototype.storeArray.length; i++) {
    let currentStore = Store.prototype.storeArray[i];
    currentStore.getHourlyCustomers();
    currentStore.getHourlyCustomersArray();
    currentStore.getHourlyCookieSales();
  }
}

// // declare stores --------------------------------------------------------
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

//call the function -----------------------------------------------------------
renderStores();

//table work --------------------------------------------------------------------
for (let i = 0; i < this.hourlyCookieSales.length; i++) {
  let tdElem = document.createElement(td);
  tdElem.textContent = this.hourlyCookieSales[i];
  trElem.appendChild(tdElem);
  console.log(tdElem);
}





//first iteration code below ------------------------------------------------------
// --------------------------------------------------------------------------------

// }

// function randomCustomers(minCustomers, maxCustomers) {
//   return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);

// function cookiesSoldPerHour(customers, avgCookiesPerSale) {
//   return Math.floor(customers * avgCookiesPerSale);
// }

// //these are the individual store customer minimums and maximums
// let seattleCustomers = [23, 66];
// let tokyoCustomers = [3, 24];
// let dubaiCustomers = [11,38];
// let parisCustomers = [20,38];
// let limaCustomers = [2,16];
 

// let seattle = {
//   minCustomers: 23,
//   maxCustomers: 65 + 1,
//   //I have to artificially increase maxCustomer by one to get the random number generator to range between 2 and 5.
//   hourlySales: [],
//   avgCookiesPerSale: 6.3,
//   customers: randomCustomers(seattleCustomers[0], seattleCustomers[1]),
  

// }
// function salesByTheHour() {
//   for (let i = 0; i > storeHours.length; i++) {
//     let currentSale = this.customers * this.avgCookiesPerSale;
//     seattle.hourlySales.push(currentSale);
    
//   }
// }

// let storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// // let storeArray = [seattle, tokyo, dubai, paris, lima];

// seattle.salesByTheHour();
// console.log(seattle);

// //my code ends here

