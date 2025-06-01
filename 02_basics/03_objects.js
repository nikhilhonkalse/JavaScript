// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Nikhil",
    "full Name": "Nikhil Honkalse",
    [mySym]: "Key1",
    age: 25,
    location: "Vijayapur",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(typeof(JsUser[mySym]));

JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser.email);
JsUser.email = "nikhil@honkalse.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this["full Name"]}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

