const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]

// const Myvalue = myNumbers.reduce( (acc, curtval) => (acc + curtval), 0 )

// const Myvalue = myNumbers.reduce(function(acc, curtval) {
//     console.log(`acc: ${acc}, curtval: ${curtval}`)
//     return acc + curtval
// },0)

// const Myvalue = myNumbers.reduce( (acc, curtval) => (acc + curtval),0 )
// console.log(Myvalue)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "java Course",
        price: 3999
    }
]

const MyCartBalance = shoppingCart.reduce( (acc, item) => acc+ item.price, 0)
console.log(MyCartBalance)