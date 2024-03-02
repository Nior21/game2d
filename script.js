// script.js
const gameBoard = document.getElementById("game");

let playerPosition = { x: 1, y: 1 };
let finishPosition = { x: 8, y: 8 };

const gameMap = [
    "##########",
    "#        #",
    "#  #     #",
    "#  #  ## #",
    "#  #     #",
    "#  ##### #",
    "#    #   #",
    "# ##  ## #",
    "#  #     #",
    "##########"
];

gameMap.forEach((row, rowIndex) => {
    row.split("").forEach((cell, cellIndex) => {
        const div = document.createElement("div");
        div.className = "cell";

        if (cell === "#") {
            div.classList.add("wall");
        } else {
            div.classList.add("empty");
        }

        div.style.top = rowIndex * 20 + "px";
        div.style.left = cellIndex * 20 + "px";

        gameBoard.appendChild(div);
    });
});

const finish = document.createElement("div");
finish.className = "cell finish";
finish.style.top = 8 * 20 + "px";
finish.style.left = 8 * 20 + "px";
gameBoard.appendChild(finish);

const player = document.createElement("div");
player.className = "cell player";
player.style.top = 1 * 20 + "px";
player.style.left = 1 * 20 + "px";
gameBoard.appendChild(player);
movePlayer(0, 0);

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'arrowup':
        case 'w':
        case 'ц':
            movePlayer(0, -1);
            break;
        case 'arrowdown':
        case 's':
        case 'ы':
            movePlayer(0, 1);
            break;
        case 'arrowleft':
        case 'a':
        case 'ф':
            movePlayer(-1, 0);
            break;
        case 'arrowright':
        case 'd':
        case 'в':
            movePlayer(1, 0);
            break;
    }
});

function movePlayer(deltaX, deltaY) {
    const newX = playerPosition.x + deltaX;
    const newY = playerPosition.y + deltaY;

    if (isNewPositionValid(newX, newY)) {
        playerPosition.x = newX;
        playerPosition.y = newY;

        player.style.top = playerPosition.y * 20 + "px";
        player.style.left = playerPosition.x * 20 + "px";
        console.log(playerPosition.x + ":" + playerPosition.y)
        checkWin();
    }
}

function isNewPositionValid(x, y) {
    if (gameMap[y][x] !== "#") {
        return true;
    } else {
        return false;
    }
}

const upButton = document.getElementById("up");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const downButton = document.getElementById("down");

upButton.addEventListener('click', () => movePlayer(0, -1));
leftButton.addEventListener('click', () => movePlayer(-1, 0));
rightButton.addEventListener('click', () => movePlayer(1, 0));
downButton.addEventListener('click', () => movePlayer(0, 1));

function checkWin() {
    if (playerPosition.x === finishPosition.x && playerPosition.y === finishPosition.y) {
        alert("Поздравляем! Вы достигли финиша!");
    }
}