// let operator = prompt("Enter operator (+, -, /, * )");
// let firstNum = parseInt (prompt("Enter First Number: "));
// let secondNum = parseInt(prompt("Enter Second Number: "));
// let result;
// switch(operator){
//             case "-":
//                 result = firstNum - secondNum;
//                 console.log(`${firstNum} - ${secondNum} = ${result}` );
//                 break;
//             case "+":
//                     result = firstNum + secondNum;
//                     console.log(`${firstNum} + ${secondNum} = ${result}` );
//                     break;
//             case "*":
//                         result = firstNum * secondNum;
//                         console.log(`${firstNum} * ${secondNum} = ${result}` );
//                         break;
//             case "/":
//                          result = firstNum / secondNum;
//                          console.log(`${firstNum} + ${secondNum} = ${result}` );
//                             break;

//             default:
//                 console.log("Please choose correct operator");
//                 break;

// }

// methods of array 

// let arr=[1,2,3];
// arr.push(5);
// arr.unshift(0);
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// arr.shift();
// arr.pop();
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let arr1=[1,3,2,4,6,5];
// let arr2=["eat", "watch", "play","warm"]

// console.log(arr1.sort(),"sorted array")
// // console.log(arr1.reverse(),"sorted array")
// console.log(arr1.concat(arr2), "concat");

// const mFun=[10,20,30,40];
// const arrFun= mFun.map(subtract);
// function subtract(num){
//     return num -5; 
// }
// console.log(arrFun)

let obj1=[{
    id :1,
    firstName:"Rijan",
    lastName: "Tiwari",
},
    {
       id :1,
        firstName: "Hello",
        lastName: "World",

    },
    {
        id :3,
         firstName: "Hello",
         lastName: "World",
 
     }
]

// let modifiedArr = obj1.map(added);
// function added(object){
//     console.log(object)
//     return {fullname: `${object.firstName} ${object.lastName}`}
// }
// console.log(modifiedArr)
let modifiedArr = obj1.filter(filterByName);
function filterByName(object){
    return object.firstName === "Hello";
}
console.log(modifiedArr)