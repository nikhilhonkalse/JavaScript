function sayMyName(){

    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName(); // Calling the function

// function addTowNumbers(num1, num2){
//     console.log(num1 + num2)
    
// }

// addTowNumbers(3, "a")
// addTowNumbers(null, 3)

function addTowNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    
}
const result = addTowNumbers(3, 5)

// console.log("result: ", result);

function loginUserMessage(username){
    if(!username === undefined){
        console.log("Username is required");
        return
    }
    return `${username} has logged in successfully`
}

// // console.log(loginUserMessage("Nikhil"));
// console.log(loginUserMessage("Nikhil")); // 8

function calculateCartPrice(val1, val2,  ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 1000));

const user = {
    username: "Nikhil",
    prices: 400
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 500
// })

// handleObject({
//     username: "Nikhil",
//     price: 100
// })

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));