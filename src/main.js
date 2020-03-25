// Canvas element
const canvas = document.getElementById("canvas");
// Context
const context = canvas.getContext("2d");

const midx = parseInt(canvas.clientWidth / 2);
const midy = parseInt(canvas.clientHeight / 2);

context.moveTo(midx, midy);
context.strokeRect(midx, midy, 10, 10);

function randomizeInterval(a, b) {
  const length = Math.abs(a) + Math.abs(b);

  return parseInt(Math.random() * length);
}

function randomizeNumber(number) {
  return parseInt(Math.random() * number);
}

const colors = ["black", "red", "green", "blue", "aqua", "purple", "yellow"];

setInterval(function() {
  context.strokeStyle = colors[randomizeNumber(colors.length)];
  context.strokeRect(
    randomizeNumber(canvas.clientWidth),
    randomizeNumber(canvas.clientHeight),
    randomizeNumber(50),
    randomizeNumber(50)
  );
}, 200);

context.stroke();
