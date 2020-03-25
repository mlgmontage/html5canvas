// Canvas element
const canvas = document.getElementById("canvas");
// Context
const context = canvas.getContext("2d");

const midx = parseInt(canvas.clientWidth / 2);
const midy = parseInt(canvas.clientHeight / 2);

context.moveTo(midx, midy);
context.lineTo(midx + 200, midy + 100);
context.stroke();
