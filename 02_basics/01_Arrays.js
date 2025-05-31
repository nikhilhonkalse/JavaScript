// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["IronMan", "SpiderMan", "Captain America", "Thor", "Hulk"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(myArr[2]); 
// console.log(myHeros);
// console.log(myArr2);

// Array Methods

// myArr.push(6,7); // Adds an element to the end of the array
myArr.unshift(-1); // Adds an element to the beginning of the array 
myArr.shift(); // Removes the first element from the array
// myArr.pop(); // Removes the last element from the array
// console.log(myArr.includes(5)); 
// console.log(myArr.indexOf(2));
// console.log(myArr);

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);



// myArr.splice(2, 0, 2.5); // Adds an element at index 2 without removing any elements
// myArr.splice(2, 1); // Removes the element at index 2   
// myArr.splice(2, 1, 2.5); // Replaces the element at index 2 with 2.5
// myArr.splice(2, 1, 2.5, 3.5); // Replaces the element at index 2 with 2.5 and adds 3.5
// myArr.splice(2, 0, 2.5, 3.5); // Adds 2.5 and 3.5 at index 2 without removing any elements



