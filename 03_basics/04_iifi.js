/*Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a common design pattern used to create a private scope for variables and functions, preventing them from polluting the global namespace.*/


(function morning(){
    console.log("Good Morning");
    
})(); // This is an IIFE (Immediately Invoked Function Expression)
// morning();
// To work the 2 IIFI function properly, we need to give ; semicolon at the end of the previous line, otherwise it will throw an error. 
(() =>{
console.log("Good Evening");

}) ()