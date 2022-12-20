// let button = document.querySelector("button");
// button.addEventListener("click", ()=>{
//     document.getElementById("header").innerText="I'm Clicked";

// }
// );
function clickTest(){
    document.getElementById("header").innerText="I'm Clicked";
}
let input = document.querySelector("input");
// console.log(input,'input')
input.addEventListener("keypress", (event)=> {
    if(event.key === "h"){
        console.log("key pressed");

    }
});