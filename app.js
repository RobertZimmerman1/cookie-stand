'use strict';

function randomCustomers(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}

function cookiesSoldPerHour(customers, avgCookiesPerSale) {
  return Math.floor(customers * avgCookiesPerSale);
}

//these are the individual store customer minimums and maximums
let seattleCustomers = [23, 66];
let tokyoCustomers = [3, 24];
let dubaiCustomers = [11,38];
let parisCustomers = [20,38];
let limaCustomers = [2,16];
 

let seattle = {
  minCustomers: 23,
  maxCustomers: 65 + 1,
  //I have to artificially increase maxCustomer by one to get the random number generator to range between 2 and 5.
  hourlySales: [],
  avgCookiesPerSale: 6.3,
  customers: randomCustomers(seattleCustomers[0], seattleCustomers[1]),
  

}
function salesByTheHour() {
  for (let i = 0; i > storeHours.length; i++) {
    let currentSale = this.customers * this.avgCookiesPerSale;
    seattle.hourlySales.push(currentSale);
    
  }
}

let storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// let storeArray = [seattle, tokyo, dubai, paris, lima];



seattle.salesByTheHour();
console.log(seattle);



//my code ends here

