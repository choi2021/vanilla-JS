const greeting_form = document.querySelector(".js-greeting"),
    greeting_input = greeting_form.querySelector("input"),
    greeting_span = document.querySelector(".greeting-span");

const USER_LS = "current user";
const SHOWING_CN="greeting-showing"

function paintValue(text) {
    greeting_form.classList.remove(SHOWING_CN);
    greeting_span.classList.add(SHOWING_CN);
    greeting_span.innerText=`WELCOME ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greeting_input.value;
    paintValue(currentValue);
    saveName(currentValue);
    greeting_input.value = '';
}

function askForName() {
    greeting_form.classList.add(SHOWING_CN)
    greeting_form.addEventListener("submit", handleSubmit)
}

function init() {
    const loadedName = localStorage.getItem(USER_LS);
    if (loadedName === null) {
        askForName();
    } else {
        paintValue(loadedName);
    }
}

init();