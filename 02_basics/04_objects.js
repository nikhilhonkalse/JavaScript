// const tinerUser = new Object();
const tinerUser = {}

tinerUser.id = "nik123"
tinerUser.name = "Nikhil Honkalse"
tinerUser.isLoggedIn = false

// console.log(tinerUser);

const regularUser = {
    email: "nikhil@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Nikhil",
            lastName: "Honkalse"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.firstName);

// console.log(regularUser.fullName.firstName);
// console.log(regularUser.fullName.lastName);
// console.log(regularUser["email"]);
// console.log(regularUser["fullName"]["firstName"]);
// console.log(regularUser["fullName"]["lastName"]);
// console.log(regularUser.fullName["firstName"]); 
// console.log(regularUser.fullName["lastName"]);
// console.log(regularUser["fullName"].firstName);
// console.log(regularUser["fullName"].lastName);


const obj1 ={1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
// const obj7 = {7: "g", 8: "h"}
// // const obj8 = {9: "i", 10: "j"} 
// // const obj9 = {11: "k", 12: "l"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4);
// const obj5 = Object.assign(obj1, obj2, obj4);
// console.log(obj3);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);


const users = [
    {
        id: 1,
        email: "nik@gmail.com",
    },
    {
        id: 1,
        email: "nik@gmail.com",
    },
    {
        id: 1,
        email: "nik@gmail.com",
    }
]

users[1].email
// console.log(tinerUser);

// console.log(Object.keys(tinerUser)); // Returns an array of keys
// console.log(Object.values(tinerUser)); // Returns an array of values
// console.log(Object.entries(tinerUser)); // Returns an array of key-value pairs


// console.log(tinerUser.hasOwnProperty('isLogged')); // Checks if the property exists



// ++++++++++++++++++++++++// Destructuring Objects +++++++++++++++++++++++++

const course = {
    courseName: "JavaScript Basics",
    duration: "4 weeks",
    courseinstructor: "Hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course; // Destructuring assignment

// console.log(courseinstructor); // "Hitesh"
console.log(instructor);


// ++++++++++++++++++JSON +++++++++++++++++++++++++++++++
// {
//     "name": "Nikhil",
//     "age": 25, 
//     "email": "nik@gmail.com"
// }

