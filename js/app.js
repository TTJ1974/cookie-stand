'use strict';

console.log('hello world!');

let hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Alex showed me this function.
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//avgcookie = average cookies sold per customer.

let seattle = {
  name: 'Seattle',
  minCust: '23',
  maxCust: '65',
  avgcookie:'6.3',
  avgcust: [], //per hour
  avgsold: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.avgcust.push(x);
      console.log(this.avgcust);

    }
  },
  avgCookie: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.avgcust[i] * this.avgcookie);
      this.avgsold.push(perhour);
      console.log(this.avgsold);

    }
  }

};
seattle.minMaxCust();
seattle.avgCookie();

let tokyo = {
  name:'Tokyo',
  minCust: '3',
  maxCust: '24',
  avgcookie:'1.2',
  avgcust: [], //per hour
  avgsold: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.avgcust.push(x);
      console.log(this.avgcust);

    }
  },
  avgCookie: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.avgcust[i] * this.avgcookie);
      this.avgsold.push(perhour);
      console.log(this.avgsold);

    }
  }

};
tokyo.minMaxCust();
tokyo.avgCookie();

let dubai = {
  name:'Dubai',
  minCust: '11',
  maxCust: '38',
  avgcookie:'3.7',
  avgcust: [], //per hour
  avgsold: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.avgcust.push(x);
      console.log(this.avgcust);

    }
  },
  avgCookie: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.avgcust[i] * this.avgcookie);
      this.avgsold.push(perhour);
      console.log(this.avgsold);

    }
  }

};
dubai.minMaxCust();
dubai.avgCookie();

let paris = {
  name:'Paris',
  minCust: '20',
  maxCust: '38',
  avgcookie:'2.3',
  avgcust: [], //per hour
  avgsold: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.avgcust.push(x);
      console.log(this.avgcust);

    }
  },
  avgCookie: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.avgcust[i] * this.avgcookie);
      this.avgsold.push(perhour);
      console.log(this.avgsold);

    }
  }

};
paris.minMaxCust();
paris.avgCookie();

let lima ={
  name:'Lima',
  minCust: '2',
  maxCust: '16',
  avgcookie:'4.6',
  avgcust: [], //per hour
  avgsold: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.avgcust.push(x);
      console.log(this.avgcust);

    }
  },
  avgCookie: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.avgcust[i] * this.avgcookie);
      this.avgsold.push(perhour);
      console.log(this.avgsold);

    }
  }

};
lima.minMaxCust();
lima.avgCookie();

