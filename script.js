// script.js
const gameBoard = document.getElementById("game");

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
        } else if (cell === " ") {
            div.classList.add("empty");
        } else if (cell === "S") {
            div.classList.add("start");
        } else if (cell === "F") {
            div.classList.add("finish");
        }
        
        div.style.top = rowIndex * 20 + "px";
        div.style.left = cellIndex * 20 + "px";
        
        gameBoard.appendChild(div);
    });
});