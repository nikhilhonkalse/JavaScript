const userValue = 0

if (userValue) {
//     console.log("User value is thruty");
// } else {
//     console.log("User value is falsy");
}

//falsy values in JavaScript
// 0, -0, BigInt 0n, "", null, undefined, NaN, false

// truthy values in JavaScript
// "0", "false", [], {}, function(){}, true, 1, -1, BigInt 1n, Infinity, -Infinity

// Note: In JavaScript, all values are truthy except for the falsy values listed above.

// if (userValue === 0) {
//     console.log("User value is empty")
// } else{
//     console.log("User value is not empty")
// }

const emptyObj = {};

if( Object.keys(emptyObj).length === 0){
    // console.log("Object is empty")
}

// ++++++++++++++++++++++++++Nullish Coalescing Operator (??) ++++++++++++++++++++++++++ 
// The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values.
// means if the left side is null or undefined, return the right side value.

let val1;

val1 = 5 ?? 10;
val1 = 10 ?? 5;
val1 = 0 ?? 5
val1 = null ?? 5;
val1 = undefined ?? 5;
val1 = " " ?? 5;
val1 = null ?? 5 ?? 10
val1 = null ?? undefined ?? 10
// console.log(val1);


// Ternary Operator 
// The ternary operator is a shorthand for the if-else statement.

// condition ? true :false

const iceTeaPrice = 100;
iceTeaPrice > 50 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");