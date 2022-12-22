// let button = document.querySelector("button");
// console.log(button,'button');
// console.log(this,"this is ");
// button.addEventListener("click",(event)=> {
//     console.log(this,"hello event")
// }


// // default params
// function add(num1, num2=10){
//     return num1 + num2;
// }
// console.log(add (5));

// let myName="John";
// let myRole="student"

// destructuring

// let array = ["Rijan", "Student"];
// const[myName, myRole]=array;
// console.log(myName,"myName");
// // object desstructuring 
// const object2={name:"rijan",caste:"Tiwari"}
// const{caste} = object2;
// console.log(caste,"caste")

// spread operator

// let arr = [1,2,3,4,5,6,7,7];
// let newarr = [...arr];
// console.log(newarr)

// console.log(sum(arr));
// function sum(...add){
//     let result = 0;
//     for(let i=0;i < add.length; i++){
//         sum+=add[i];
//     }
//     return result;
// }

// const myVehicle={
//     brand:"Ford",
//     model:"Mustang",
//     color:"red"
// }
// const updateMyVehicle={
//     type:"car",
//     year:2021,
//     color:"Yellow",
// }
// const copyVariable = {...myVehicle,...updateMyVehicle};
// console.log(copyVariable)
// deep copy and shallow copy
const button= document.querySelector("button");
const getQuota = document.getElementById("getquotahere")
const getPost=()=>{
    let data =fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => getQuota.innerText=data.title.id,);

};

button.addEventListener("click",getPost);

