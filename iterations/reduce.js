// Reduce: use to get total of whole array mainly used in shopping carts
const arr =  [1,2,3,4,5,6,7,8,9,10]
let sum = arr.reduce((tot,i) => {
    return tot + i
}, 0)
// console.log(sum);


const shoppingCart = [
    {
        nm: "JS-course",
        price: 2999,
    },
    {
        nm: "Py-course",
        price: 999,
    },
    {
        nm: "Cpp-course",
        price: 1999,
    },
    {
        nm: "MAD-course",
        price: 5999,
    },
    {
        nm: "DS-course",
        price: 3999,
    },
]
let total = shoppingCart.reduce((acc,item) => { return acc + item.price} ,0)
console.log(total);

