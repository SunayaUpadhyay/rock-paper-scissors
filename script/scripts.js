
function changePage() {
    location.replace("main-page.html");
}

const startButton = document.querySelector("#start-button");
startButton.addEventListener('click', changePage);

const images = document.querySelector("img");
images.forEach(image => {
    image.addEventListener('click', playGame)
});

function playGame(e) {
    console.log(e);
}
