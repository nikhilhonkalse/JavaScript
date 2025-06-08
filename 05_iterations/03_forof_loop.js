// for of loop

// const arr = [1, 2, 3, 4, 5]
// for (const value of arr) {
//     console.log(`Value is ${value}`);
// } 

// const greet = "Hello_World"
// for (const greeting of greet) {
//     console.log(`Each char of greet is ${greeting}`)
// }

//Maps

const worldMap = new Map()
worldMap.set('IN', "India")
worldMap.set('US', "United States of AMerica")
worldMap.set('NO', "Norway")

// console.log(worldMap)

for (const [key, value] of worldMap) {
    console.log(key, ":-", value);
    
}

const myObject = {
    "game1": "NFS",
    "game1": "NFS Most Wanted",
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}// This will not work as expected because objects are not iterable in the same way as arrays or maps.