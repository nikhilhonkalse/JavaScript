// for loop

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        // console.log(`5 is the best number`);
        
    }
    // console.log(`Element at index ${i} is ${element}`);
    // console.log(element);
    
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
        for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer value: ${i}`)
        // console.log(i + " * " + j + " =" + (i * j));
        // console.log(`${i} * ${j} = ${i * j}`);
        
        
    }
    
}

let myArray = ["flash", "superman", "batman", "wonderwoman", "aquaman"];
// console.log(myArray.length);
for (let index = 0; index < 5; index++) {
    const element = myArray[index]
    // console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++){
    if (index == 5) {
        console.log(`Deceted 5`)
        // break;
        continue;
    }
   console.log(`Value of i is ${index}`)
}