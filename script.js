const canvas = document.getElementById("rocketCanvas");
const ctx = canvas.getContext("2d");

var timer;
var ele = document.getElementById('timer');
var frameId; 

const rocketImg = new Image();
rocketImg.src = "rocket.webp";

let rocket = {
    x: 125,
    y: 500
};

rocketImg.onload = function() {
    drawRocket(rocket.x, rocket.y);
};

function drawRocket(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(rocketImg, x, y, 50, 100);
}

function update() {
    if (rocket.y > -100) {
        rocket.y -= 5; 
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "50px serif";
        ctx.fillText("Great!", 80, 100);
        cancelAnimationFrame(frameId);
    }
}

function gameLoop() {
    drawRocket(rocket.x, rocket.y);
    update();
    frameId = requestAnimationFrame(gameLoop);
}

function play() {
    var sec = 10;
    ele.innerHTML = sec; 

    timer = setInterval(() => {
        sec--;
        if (sec >= 0) {
            ele.innerHTML = sec;
        } else {
            clearInterval(timer);
            gameLoop(); 
        }
    }, 1000);
}
