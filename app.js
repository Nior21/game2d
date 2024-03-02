const { createCanvas, loadImage } = require('canvas');
const express = require('express');
const app = express();
const port = 3000;

const WIDTH = 800;
const HEIGHT = 600;

let playerX = WIDTH / 2;
let playerY = HEIGHT / 2;

app.get('/', (req, res) => {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Отрисовка фона
  ctx.fillStyle = '#87CEEB'; // Цвет неба
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Отрисовка персонажа
  loadImage('player.png').then((image) => {
    ctx.drawImage(image, playerX, playerY, 50, 50);
    res.send('<img src="' + canvas.toDataURL() + '" />');
  });

});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

// Перемещение персонажа по нажатию клавиш
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(key){
  if (key === 'w') {
    playerY -= 5;
  } else if (key === 's') {
    playerY += 5;
  } else if (key === 'a') {
    playerX -= 5;
  } else if (key === 'd') {
    playerX += 5;
  }
});
