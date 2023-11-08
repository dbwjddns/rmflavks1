
const canvas = document.getElementById("canvas");
//
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.rect(50,50,100,100);
ctx.stroke();

//두번째 사각형 green
ctx.beginPath();
ctx.rect(150,150,100,100);
ctx.fillStyle="green";
ctx.fill();

ctx.beginPath();
ctx.rect(250,250,100,100);
ctx.fillStyle="red";
ctx.fill();

ctx.beginPath();
ctx.rect(350,350,100,100);
// ctx.fillStyle="red";
ctx.strokeStyle="red";
ctx.stroke();