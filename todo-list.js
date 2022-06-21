function addListItem(event) {
  event.preventDefault();
  if (itemValue.value == "") {
    return;
  } else {
    let li = document.createElement("li");
    li.innerHTML = itemValue.value;
    let firstLetter = li.innerText[0].toUpperCase();
    li.innerText = firstLetter + li.innerText.slice(1);
    document.getElementById("todo_list").append(li);
  }
}

let addButton = document.getElementById("input_button");
let itemValue = document.getElementById("todo_input");
addButton.addEventListener("click", addListItem);
