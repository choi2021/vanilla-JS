const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClicked() {
    const currentClass = title.classList;
    currentClass.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClicked);
}

init();
