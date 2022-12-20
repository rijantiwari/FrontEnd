
// Use For loop first , Foreach loop and for of loop 
// 1)Use above mentioned loop to print the name of fruits  in console:


const Fruits =[
    { name: "Apple", cost: "200" },
    { name: "Guava", cost: "100" },
    { name: "Mango", cost: "200" },
  ];
  console.log("..............For  Loop ........."); 
  
for(let i=0; i < Fruits.length; i++){
    console.log(Fruits[i].name);
}
   console.log("..............For Each Loop .........");
    let fruitsName=Fruits.forEach((item)=> {
        console.log (item.name);
    });
    console.log("..............For of Loop .........");
    for(i of Fruits){
        console.log(i.name);
    }

    // 2)Use above fruits array and change the value of name to console the output
    // Output :Grapes
    //        Watermelon
    //        Banana
   console.log("question number 2");
   for(i of Fruits){
    Fruits[0].name="Grapes";
    Fruits[1].name="Watermelon";
    Fruits[2].name="Banana";
}
for(let i=0; i < Fruits.length; i++){
    console.log(Fruits[i].name);
}
console.log("question number 3");
// 3)Given an array that may contain duplicates, print all elements and their frequencies.
//    Use for loop.
 
// Input :  arr[] = {10, 20, 20, 10, 10, 20, 5, 20}
// Output : 10 3
//          20 4
//          5  1
// Input : arr[] = {10, 20, 20}
// Output : 10 1
//          20 2
const arrInput = [10, 20, 20, 10, 10, 20, 5, 20];
const count = {};
arrInput.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});
console.log(count);