const myObject = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    java: "Java",
    cpp: "C++",
    swift: "Swift"
}

// for (const key in myObject) {
//     // console.log(`Key: ${key}, Value: ${myObject[key]}`);
//     console.log(`Shortcut form is  ${myObject[key]} is ${key}`)
// }

// const programming =["js", "py", "rb", "java", "cpp", "swift"];
// for (const key in programming) {
//     console.log(programming[key]);
    
// }

const worldMap = new Map()
worldMap.set('IN', "India")
worldMap.set('US', "United States of America")
worldMap.set('NO', "Norway")

for (const key in worldMap) {
    console.log(key)
}// This will not work as expected because Maps are not iterable with for...in loop.