// var button = document.getElementById("your-button-id");
// listitem.textContent = input.value;
// var deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";
// deleteButton.addEventListener("click", deleteItem);
// listitem.appendChild(deleteButton);
// const ul = document.getElementById("list-container");
// let input = document.getElementById("input");

function add() {
  var inputValue = input.value.trim();
  if (inputValue !== "") {
    var listitem = document.createElement("li");
    listitem.textContent = inputValue;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteItem);
    listitem.appendChild(deleteButton);
    ul.appendChild(listitem);
    input.value = "";
  }
}
