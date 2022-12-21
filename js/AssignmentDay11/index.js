let itemInput = document.getElementById("item-input");
let addButton = document.querySelector("#add-button");
let unorderdList = document.querySelector("#items")

const createElement= ()=> {
    const listItem = document.createElement("li");
    const label=document.createElement("label");
    listItem.appendChild(label);
    label.innerText=itemInput.value;
    unorderdList.appendChild(listItem)
}
const addItem= ()=>{
    createElement();
}
addButton.addEventListener("click",addItem);

