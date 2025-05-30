const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.656789
// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-22));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.9));
// console.log(Math.min(14, 5, 6, 7, 8, 9));
// console.log(Math.max(14, 5, 6, 7, 8, 9));
console.log(Math.random()); // returns a random number between 0 and 1
console.log(Math.random() * 100); // returns a random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // returns a random integer between 0 and 99
console.log(Math.random() * 100 + 1); // returns a random number between 0 and 100


const min = 10;
const max = 20; 

console.log(Math.floor(Math.random() * (max - min + 1)) + max);






