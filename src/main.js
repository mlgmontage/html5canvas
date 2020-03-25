// Template

// selecting canvas element 500x500
const canvas = document.getElementById("canvas");
const midX = parseInt(canvas.clientWidth / 2);
const midY = parseInt(canvas.clientHeight / 2);

// getting context
const context = canvas.getContext("2d");

// Actual drawing

// center the canvas
context.moveTo(midX, midY);

function lineFromCenter(x, y) {
  context.lineTo(midX + x, midY + y);
}

function randomNumber(a, b) {
  const sum = Math.abs(a) + Math.abs(b);

  return parseInt(Math.random() * sum) - Math.abs(a);
}

function drawRandom() {
  const midX = parseInt(canvas.clientWidth / 2);
  const midY = parseInt(canvas.clientHeight / 2);

  lineFromCenter(randomNumber(-midX, midX), randomNumber(-midY, midY));
  context.stroke();
}

setInterval(() => drawRandom(-250, 250), 200);

context.stroke();
