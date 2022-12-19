// let promise = new Promise(function(resolve, reject){
//     // resolve(); when successful
//     // reject(); when error
// });
// promise.then(
//     function(value){
//         // code if successful
//     },
//     function(error){
//         // code if some error
//     }
// );
// let x = 1; 
// let promise = new Promise((resolve,reject)=>{
//     if (x === 0){
//         resolve("hello Iam resolved");
//     } else{
//         reject('Errorrrrrrrr');
//     }
// });

// // console.log(promise,"promise");  
// promise.then(
//  (value)=>{
//     console.log(value,"value");
//  }, 
//  (error) => {
//     console.log(error,"error");
//  }

// );

let header = document.getElementById("header");
header.innerHTML="<p> Hello I am header </p>"
header.style.color="blue";
// header.style.background="black"
header.style.paddingLeft="10%"


let el = document.createElement("button");
el.innerText="click me ";
// appendChild
document.body.appendChild(el);
// console.log(el,"h1")

el.addEventListener("click",change => header.innerText="I'm called by arrow function");


// let head=document.createElement("h2");
// head.innerText="Hi I'm Header";
// document.body.appendChild(head)

// el.onClick = head.innerHTML="Changed"

let select = document.getElementById("myFood");
let sel= document.querySelector("#myFood");

console.log(select.firstElementChild,"first child");
console.log(select.tagName,"tag name")
console.log(select.parentNode, "Parent Node")
console.log(select.childElementCount, "count")
console.log(select.childNodes, "child node")