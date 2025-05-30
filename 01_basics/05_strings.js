const name ="Nikhil Honkalse"
const repoCost = 50

console.log(`Hello my name is ${name} and my repoCount is ${repoCost}`);

const gameName = new String("nikhilnHonkalse")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('H'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(2,10)
console.log(anotherString);

const newStringOne = "     nikhil"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikhil.com/nikhil%20honkalse"

console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes("nikhil"));



