// 1. Write a JavaScript method that takes an smallestInputay of numbers and returns the smallestInputay of the second and third  smallest number without using the sort method.
// Example:
//  Input: [12,33,5,27,1] 
//  output =[5,12]
const smallestInput =[12,33,5,27,1]
for (let i = 0; i < smallestInput.length; i++) {
  for (let j = i + 1; j < smallestInput.length; j++) {
    if (smallestInput[i] > smallestInput[j]) {
     let  temp = smallestInput[i];
      smallestInput[i] = smallestInput[j];
      smallestInput[j] = temp;
    }
  }
}
let outputSmall=[];
for(let i=1; i<=2;i++){
    outputSmall.push(smallestInput[i]);
}
// console.log(outputSmall)

// 2. Write a JavaScript method that takes an array of numbers and returns false if every number is not prime. Otherwise return true
// Example:
// [1,7,11,13] =>true
// [2,3,45]=>false
const arrPrime = [6,11,7,5]

let primeNumber = arrPrime.reduce(item => {
   if(item % 2 === 0) {
    return false;
   }
   else{
   return true;
   }
});
// console.log(primeNumber)
// 3. Given an array of nums and an integer target, return the index of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice
// Example:
//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Input: nums = [3,2,4], target = 6
//  Output: [1,2]
let inputNums = [2,4,6,8,7];
let target = 12;
let output=[];
for(let i=0; i< inputNums.length;i++){
    for(let j=i+1; j < inputNums.length;j++){
        if(inputNums[i]+inputNums[j]===target){
            output.push(i);
            output.push(j);
        }
    }
}
// console.log (output)
// 4. Write a JavaScript method that takes array of objects 
// Example:
//   const data = [
//     { food: {name:"pizza", id: 2 }, qty: 1 },
//     { food: {name:"momo",id: 3 }, qty: 5 },
//     { food: { name:"pizza",id: 2 }, qty: 9 }
//   ];
// //should be unique according to id and should sum the qty with same id 
// output=[food:{name:"pizza",qty:10}]

// 5.Write a method to Factorialize a Number
// Example:
// Input:factorialize(5)
// Output:120


function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
     
      num = num * i; 
    }
    return num; 
  }
console.log(factorialize(5));