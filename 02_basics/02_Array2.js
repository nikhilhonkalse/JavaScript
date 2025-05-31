const Marval_Heroes =["IronMan", "Captain America", "Thor", "Hulk"]
const DC_Heroes = ["Batman", "Superman","Flash"]

// Marval_Heroes.push(DC_Heroes)
// console.log(Marval_Heroes);


// const allHeroes= Marval_Heroes.concat(DC_Heroes)
// console.log(allHeroes);


const all_New_Heroes = [...Marval_Heroes, ...DC_Heroes]
// console.log(all_New_Heroes);


const anotherArray = [1,2,3,4,[5,[5,7],6,7,]]


const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Nikhil"));
console.log(Array.from("Nikhil"));
console.log(Array.from({name: "Nikhil", age: 25})); // Converts an object to an array


let score = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score, score2, score3));

