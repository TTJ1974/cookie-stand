'use strict';


let hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//let section = document.createElement('section');

// Alex showed me this function.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let section = document.getElementById('Seattle');

//avgcookie = average cookies sold per customer.

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgcookie:6.3,
  custPerHourArr: [], //per hour
  cookiesPerHourArr: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.custPerHourArr.push(x);
      //console.log(this.custPerHourArr);

    }
  },
  calcCookiesPerHr: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.custPerHourArr[i] * this.avgcookie);
      this.cookiesPerHourArr.push(perhour);
      console.log(perhour);

    }
  }

};
seattle.minMaxCust();
seattle.calcCookiesPerHr();

let tokyo = {
  name:'Tokyo',
  minCust: '3',
  maxCust: '24',
  avgcookie:'1.2',
  custPerHourArr: [], //per hour
  cookiesPerHourArr: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.custPerHourArr.push(x);
      //console.log(this.custPerHourArr);

    }
  },
  calcCookiesPerHr: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.custPerHourArr[i] * this.avgcookie);
      this.cookiesPerHourArr.push(perhour);
      console.log(perhour);

    }
  }

};
tokyo.minMaxCust();
tokyo.calcCookiesPerHr();

let dubai = {
  name:'Dubai',
  minCust: '11',
  maxCust: '38',
  avgcookie:'3.7',
  custPerHourArr: [], //per hour
  cookiesPerHourArr: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.custPerHourArr.push(x);
      //console.log(this.custPerHourArr);

    }
  },
  calcCookiesPerHr: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.custPerHourArr[i] * this.avgcookie);
      this.cookiesPerHourArr.push(perhour);
      console.log(perhour);

    }
  }

};
dubai.minMaxCust();
dubai.calcCookiesPerHr();

let paris = {
  name:'Paris',
  minCust: '20',
  maxCust: '38',
  avgcookie:'2.3',
  custPerHourArr: [], //per hour
  cookiesPerHourArr: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.custPerHourArr.push(x);
      //console.log(this.custPerHourArr);

    }
  },
  calcCookiesPerHr: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.custPerHourArr[i] * this.avgcookie);
      this.cookiesPerHourArr.push(perhour);
      console.log(perhour);

    }
  }

};
paris.minMaxCust();
paris.calcCookiesPerHr();

let lima ={
  name:'Lima',
  minCust: '2',
  maxCust: '16',
  avgcookie:'4.6',
  custPerHourArr: [], //per hour
  cookiesPerHourArr: [], //per hour
  minMaxCust: function() {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust,this.maxCust);
      this.custPerHourArr.push(x);
      //console.log(this.custPerHourArr);

    }
  },
  calcCookiesPerHr: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.custPerHourArr[i] * this.avgcookie);
      this.cookiesPerHourArr.push(perhour);
      //console.log(perhour);

    }
  }

};
lima.minMaxCust();
lima.calcCookiesPerHr();


seattle.render = function() {

  let article = document.createElement('article');
  section.appendChild(article);
  console.log(article);

  let h2 = document.createElement('h2');
  h2.textContent = seattle.name;
  article.appendChild(h2);
  console.log(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);
  for (let i = 0; i < seattle.cookiesPerHourArr.length; i++){

    let li = document.createElement('li');
    li.textContent =`${hours[i]}; ${seattle.cookiesPerHourArr[i]} cookies.`;
    ul.appendChild(li);
  }


};

tokyo.render = function() {

  let article = document.createElement('article');
  section.appendChild(article);
  console.log(article);

  let h2 = document.createElement('h2');
  h2.textContent = tokyo.name;
  article.appendChild(h2);
  console.log(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);
  for (let i = 0; i < tokyo.cookiesPerHourArr.length; i++){

    let li = document.createElement('li');
    li.textContent =`${hours[i]}; ${tokyo.cookiesPerHourArr[i]} cookies.`;
    ul.appendChild(li);
  }

};
seattle.render();
tokyo.render();

dubai.render = function() {

  let article = document.createElement('article');
  section.appendChild(article);
  console.log(article);

  let h2 = document.createElement('h2');
  h2.textContent = dubai.name;
  article.appendChild(h2);
  console.log(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);
  for (let i = 0; i < dubai.cookiesPerHourArr.length; i++){

    let li = document.createElement('li');
    li.textContent =`${hours[i]}; ${dubai.cookiesPerHourArr[i]} cookies.`;
    ul.appendChild(li);
  }


};
dubai.render();

paris.render = function() {

  let article = document.createElement('article');
  section.appendChild(article);
  console.log(article);

  let h2 = document.createElement('h2');
  h2.textContent = paris.name;
  article.appendChild(h2);
  console.log(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);
  for (let i = 0; i < paris.cookiesPerHourArr.length; i++){

    let li = document.createElement('li');
    li.textContent =`${hours[i]}; ${paris.cookiesPerHourArr[i]} cookies.`;
    ul.appendChild(li);
  }
};
paris.render();

dubai.render();

lima.render = function() {

  let article = document.createElement('article');
  section.appendChild(article);
  console.log(article);

  let h2 = document.createElement('h2');
  h2.textContent = lima.name;
  article.appendChild(h2);
  console.log(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);
  for (let i = 0; i < lima.cookiesPerHourArr.length; i++){

    let li = document.createElement('li');
    li.textContent =`${hours[i]}; ${lima.cookiesPerHourArr[i]} cookies.`;
    ul.appendChild(li);
  }
};
lima.render();



