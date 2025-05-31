// Dates

let myDate = new Date();
// console.log(myDate); // Current date and time
// console.log(myDate.toDateString()); // Current date and time
// console.log(myDate.toISOString()); // Current date and time
// console.log(myDate.toJSON()); // Current date and time
// console.log(myDate.toLocaleDateString()); // Current date and time
// console.log(myDate.toLocaleTimeString()); // Current date and time
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toTimeString()); // Current date and time
// console.log(myDate.toUTCString()); // Current date and time
// console.log(myDate.getTimezoneOffset()); // Current date and time


// let createmyDate = new Date(2023, 0, 1)
// let createmyDate = new Date(2023, 0, 1, 12, 3, 45); // Year, Month (0-11), Day, Hours, Minutes, Seconds
let createmyDate = new Date("01-14-2025")
// console.log(createmyDate.toLocaleDateString());

let myTimeStamp = Date.now(); // Returns the number of milliseconds since January 1, 1970

// console.log(myTimeStamp); // Current timestamp in milliseconds
// console.log(createmyDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());

let localDate = newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName:"long"
}
)
 console.log(localDate); // Output: "Monday, January 1, 2023, 12:00:00 AM GMT+5:30"
 
