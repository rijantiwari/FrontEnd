let button = document.querySelector("button");
console.log(button,'button');
console.log(this,"this is ");
button.addEventListener("click",(event)=> {
    console.log(this,"hello event")
}

)