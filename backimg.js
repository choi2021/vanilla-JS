const backgroundImgContainer = document.querySelector(".js-img-container");
const NUMBER = 3;

function showImage(number) {
    const image = new Image;
    image.src = `images/${number}.jpg`;
    backgroundImgContainer.appendChild(image);
}

function getNumber() {
    const number = Math.floor(Math.random() * NUMBER) + 1;
    return number;
}

function init() {
    const random = getNumber();
    showImage(random);
}

init();