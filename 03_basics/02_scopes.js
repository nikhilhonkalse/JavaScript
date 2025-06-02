var c = 300

if (true) {
let a = 10
const b = 20
// var c = 30  
// console.log("INNER: ", a, b, c);

}
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username ="Nikhil"

    function two(){
        const password = "1234"
       console.log("Username: ", username);
       console.log("password: ", password);
    }
    two();

    
}
// one();

if (true) {
    const username = "Nikhil"
    if (username === "Nikhil"){
        const website = " youtube.com"
        // console.log(username + website);       
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++ Interesting Example +++++++++++++++++++++

function addone(num){
    return num +1;
}
console.log(addone(10));

const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(10));