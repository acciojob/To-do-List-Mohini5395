//your code here
let input = document.getElementById('newTodoInput');
let addBtn = document.getElementById('addTodoBtn');
let orderedList = document.getElementById('todoList');

function addTodoItem() {
    if(input.value !== ""){
    let li = document.createElement('li');
 li.textContent = input.value;

//  orderedList.classList.add('center');
 orderedList.appendChild(li);
 input.value = "";
}
}
addBtn.addEventListener('click', addTodoItem);
