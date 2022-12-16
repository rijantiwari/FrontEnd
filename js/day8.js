
// const numbers = [ 4,5,6,7,8,9]
// let arrReduce = numbers.reduce(getsum, 0);
// function getsum(total, num){
//     console.log("total", total);
//     return total + Math.round(num);
// }

// const arrayOfFoods=[
//         {
//             name:"Pizza", cost:120
//         },
//         {
//             name:"Pasta", cost:500
//         },
// ]

// let totalBill = arrayOfFoods.reduce(getBill,0);
// function getBill(total,food){
//     return total + Math.round(food.cost);
// }
// console.log("Your total bill is", totalBill);

// hoisting
// global scope
 function helloWorld(){
    var hello; 
    // var is also a function scope 
    let world; 
    // it is function scope
 }
//  let is a block scope cannot be accessible outside the scope/block

// ForEach

// const arrFor = [2,3,4,5,6,7];
//  let loopArry = arrFor.forEach(loopArray);
// function loopArray(item, index, arrFor){
//     console.log(arrFor[index]);
// }

// Find method returns the exact same element as it is matched but it will only return the first element it matches, other it ignores/


// Function without name is called anonymous functions
// Function expression can be stored in the variable which means we can store anonymous in variable

// Arrow Function
// const arrayOfFoods=[
//             {
//                 name:"Pizza", cost:120
//             },
//             {
//                 name:"Pasta", cost:500
//             },
//     ];


    // let updatedArray= arrayOfFoods.find((food) => food.name === "Pizza");
    // console.log(updatedArray)

const arrFun = [2,3,4,5,1,2];
let newArr = [];
let i = 0;
while(i < arrFun.length){
    newArr.push(arrFun[i]);
    i++;
}
// console.log(newArr);

//  let Mname = "rijan"
// for (const element of Mname){
//     console.log(element);
// }

const arrDo = [2,3,4,5,1,2];
let newArrDo =[];
let j =0;

do{
    j++;
    newArrDo.push(arrDo[j]);    
}while(j < arrDo.length);
 console.log(newArrDo)



 (function () {
    console.log("THis is invoked function ");
 })();
