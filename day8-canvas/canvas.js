const canvas = document.querySelector('#draw')

//context - you draw on sth called context that can be 2d or 3d

const ctx = canvas.getContext("2d");

//size up canvas to be the size of the window:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55" //You have to set a start colour;
ctx.lineJoin = "round"; //there are many other options, check it out on MDN
ctx.lineCap = "round";
// ctx.lineWidth = 50; we can set lineWidth to =hue and then it will increase like hue that is incrementing

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; //hsl - check out website mother effin hsl
let direction = true;

function draw(e){
if(!isDrawing) return; //this will stop the function from running when they are not drawing;
console.log(e);
ctx.strokeStyle = `hsl(${hue}, 70%, 70%)`
ctx.beginPath();//start from
ctx.moveTo(lastX, lastY); //go to
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
lastX = e.offsetX;
lastY = e.offsetY;

hue++
if(ctx.lineWidth>=250 || ctx.lineWidth <=1){
  direction = !direction;
}
if(direction){
  ctx.lineWidth++;
}
if(!direction){
  ctx.lineWidth--;
}
}

//this function is going to be called whenever we move the mouse on top of the canvas;
canvas.addEventListener("mousedown", function(e){
  isDrawing = true;
  //es6 trick, you can set both these variables in the same line like so:
  [lastX, lastY] = [e.offsetX, e.offsetY] //we update these every time we mousedown otherwise the line will
  //always start where the last one ended;
})


canvas.addEventListener("mousemove", draw)

canvas.addEventListener("mouseup", function(){
  isDrawing = false;
})

canvas.addEventListener("mouseout", function(){
  isDrawing = false;
})
