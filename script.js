// script.js
const gameBoard = document.getElementById("game");
const player = document.createElement("div");
player.className = "cell player";
gameBoard.appendChild(player);

let playerPosition = { x: 0, y: 0 };

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

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    switch(key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
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