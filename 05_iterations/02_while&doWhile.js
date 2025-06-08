// while loop

// let index = 0;
// while (index <= 10) {    
//     console.log(`Value of an index is ${index}`);
//     index = index + 2
// }


let myArray = ["flash", "superman", "batman", "wonderwoman", "aquaman"];

let arr = 0;
while (arr < myArray.length ) {
    console.log(`Element at index ${arr} is ${myArray[arr]}`)
    // arr = arr + 1 
    arr++;
}


let score = 1;

do {
    console.log(`Score is ${score}`);
    score++;
    
} while (score <= 10);