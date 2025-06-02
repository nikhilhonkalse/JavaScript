const user = {
    username: "Nikhil",
    price: 500,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, your product price is ${this.price}`);
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "Nikhil Honkalse"
// user.price= 1000
// user.welcomeMessage()
// user.username = "nik"
// user.price = 2000
// user.welcomeMessage()

        // console.log(this);
// Arrow functions do not have their own 'this' context


// function withChai(){
//     let username = "Nikhil"
//     console.log(this.username);
    
// }
// withChai()

// const withChai = function(){
//     let username = "Nikhil"
//     console.log(this.username);
// }
// withChai()


// const withChai = () => {
//     let username = "Nikhil"
//     console.log(this);
    
// }
// withChai()

// const addTwo = (num1, num2) =>{
//     return num1+ num2;
// }
// console.log(addTwo(10, 20));

// const addTwo = (num1, num2) => num1+ num2;
// console.log(addTwo(10, 20));

const addTwo = (num1, num2) => ({username: "Nikhil"})
console.log(addTwo());