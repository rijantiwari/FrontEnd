
var heading = document.createElement("h1");
heading.innerText="List of Flowers";
document.getElementById("listAdd").appendChild(heading);


var arr = ["Rose", "Dandelion", "Jasmine","Marigold"];
var list = document.createElement("ol");
for (let i of arr) {
  let item = document.createElement("li");
  item.innerText = i;
  list.appendChild(item);
}

document.getElementById("listAdd").appendChild(list);
