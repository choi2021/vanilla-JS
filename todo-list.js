const toDoForm = document.querySelector(".js-todo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todo-list");

const TODOLIST_LS = "TO DO";
let TODOS = [];

function saveToDo() {
    localStorage.setItem(TODOLIST_LS, JSON.stringify(TODOS));
}

function deleteHandle(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const clearTODOS = TODOS.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });
    TODOS = clearTODOS;
    saveToDo();
}

function showToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = TODOS.length + 1;
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", deleteHandle)
    span.innerText = `${text}`;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    TODOS.push(toDoObj);
    saveToDo(TODOS);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentToDo = toDoInput.value;
    showToDo(currentToDo);
    toDoInput.value = '';
}

function loadedList() {
    const loadedList = localStorage.getItem(TODOLIST_LS);
    if (loadedList !== null) {
        const parsedList = JSON.parse(loadedList);
        parsedList.forEach((todo) => showToDo(todo.text));
    }
}

function init() {
    loadedList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();