// selecting ul

var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
  // create an element
  var listitem = document.createElement("li");
  // listitem.textContent = "Welcome";
  // Instead of just clicking add button everytime, i need to give some input and add it in ul as one by one.
  // listitem.textContent = input.value;
  // to add delete button
  listitem.innerHTML =
    input.value + "<button onclick='deleteItem(event)'>Delete</button>";
  // listitem.textContent = "add a new text1";
  // listitem.textContent = "add a new text2";
  ul.append(listitem);
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
