// Canvas element
const canvas = document.getElementById("canvas");
// Context
const context = canvas.getContext("2d");

const midx = parseInt(canvas.clientWidth / 2);
const midy = parseInt(canvas.clientHeight / 2);

context.moveTo(midx, midy);

context.beginPath();
context.arc(10, 10, 20, 0, 2 * Math.PI);

function randomizeInterval(a, b) {
  const length = Math.abs(a) + Math.abs(b);

  return parseInt(Math.random() * length) + Math.abs(a);
}

function randomizeNumber(number) {
  return parseInt(Math.random() * number);
}

setInterval(function() {
  context.beginPath();
  context.arc(
    randomizeNumber(canvas.clientWidth),
    randomizeNumber(canvas.clientHeight),
    randomizeInterval(10, 50), // radius
    0, // start angle
    2 * Math.PI // end angle
  );
  context.stroke();
}, 200);

context.stroke();
