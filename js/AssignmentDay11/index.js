let itemInput = document.getElementById("item-input");
let addButton = document.querySelector("#add-button");
let unorderdList = document.querySelector("#items")


const createElement= ()=> {
    const listItem = document.createElement("li");
    const editBtn=document.createElement("button");
    const deleteBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.className="edit-button";
    deleteBtn.innerText="Delete";
    deleteBtn.className="delete-button";
    const label=document.createElement("label");
    listItem.appendChild(label);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    label.innerText=itemInput.value;
    return listItem;
}
const addItem= ()=>{

    let listItem = createElement();
   itemInput.value !== ""? unorderdList.appendChild(listItem):alert("please add item");
    itemInput.value="";
    handleEvents(listItem);
    addButton.innerText="Add"
   
}
const editTodo=()=>{
   
}
function handleDelete(){
    console.log(this,"I am running")
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
function handleEdit(){  
        // console.log(this,'this')
        // let listItem = this.parentNode;
        // let label = listItem.querySelector("label");
        // itemInput.value=label.textContent;
        // addButton.innerHTML="update";
}
const handleEvents=(listItem)=>{
    console.log(listItem)
    let editHandle=document.querySelector(".edit-button");
    console.log(editHandle,"editbutton handle")
    let deleteHandle=listItem.querySelector(".delete-button");
    console.log(deleteHandle,'delete handle ')
    deleteHandle.addEventListener("click",handleDelete)
    editHandle.addEventListener("click",handleEdit);

}


addButton.addEventListener("click",addItem);

