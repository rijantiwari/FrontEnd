
// const numbers = [ 4,5,6,7,8,9]
// let arrReduce = numbers.reduce(getsum, 0);
// function getsum(total, num){
//     console.log("total", total);
//     return total + Math.round(num);
// }

const arrayOfFoods=[
        {
            name:"Pizza", cost:120
        },
        {
            name:"Pasta", cost:500
        },
]

let totalBill = arrayOfFoods.reduce(getBill,0);
function getBill(total,food){
    return total + Math.round(food.cost);
}
console.log("Your total bill is", totalBill);