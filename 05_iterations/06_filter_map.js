const coading = ["js", "ruby", "java", "python", "cpp"]

// const values = coading.forEach( (item) => {
//     console.log(item)
//     return item
// } )

// console.log(values) 

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynums.filter( (num) => num > 4 )
// console.log(newNums)
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = mynums.filter( (num) => {
//    return num > 4
// } )


// const newNums = []

// mynums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )


// console.log(newNums)

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];

// const noteBooks= books.filter( (bk) => bk.genre === "History" )
// const noteBooks= books.filter( (bk) => { return bk.publish >=1999} )

const noteBooks = books.filter( (bk) => { 
    return bk.publish >= 1999 && bk.genre === "Science"} )

console.log(noteBooks)