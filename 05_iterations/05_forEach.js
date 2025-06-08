const coding = ["js", "py", "rb", "java", "cpp", "swift"];

// coding.forEach( function (val){
//     console.log(val)
// } )


// coding.forEach( (item) => {
//     console.log(item)
// });

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     // console.log(`Item at index ${index} is ${item} and the whole array is ${arr}`);
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageType: "Dynamic",
        languagefileExtension: ".js"
    },
    {
        languageName: "Python",
        languageType: "Dynamic",
        languagefileExtension: ".py"
    },
    {
        languageName: "Java",
        languageType: "Dynamic",
        languagefileExtension: ".java"
    }
]

myCoding.forEach( (item) => {
    console.log(`My programing language is ${item.languageName} and it is ${item.languageType} type and it's extension is ${item.languagefileExtension}`)
})