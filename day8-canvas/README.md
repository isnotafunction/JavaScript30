### Notes:


* we draw on sth called context and you get it by setting a variable:
   ` var ctx = canvas.getContext('2d')`

(getContext() is a built-in HTML object, with properties and methods for drawing)


* we set:

`ctx.strokeStyle() =` to a starting colour;
`ctx.lineJoin =` to round - (other options: bevel, miter)
`ctx.lineCap =` to round - (other options: butt, square)


* we set drawing only to happen when the user is clicking and dragging on the canvas,

through setting a flag `isDrawing = false` and then in event listeners we set it to true when the user is actually mousing on canvas;


* we set variables lastX, lastY and hue to 0, later on the values get updated;


* `function draw(e)` - this function will then be called every time the user is mousing down;

we set:
`ctx.beginPath()` - begins a path;
`ctx.moveTo(lastX, lastY)` - moves the path to the specified point in the canvas, without creating a line;
`ctx.lineTo(e.offsetX, e.offsetY)` - defines the ending point of the line;
`ctx.stroke()` - actually draws the path you have defined;
``ctx.strokeStyle() = `hsl ${hue}, 70%, 70%` `` - it captures the incrementing hue;
`lastX = e.offsetX`
`lastY = e.offsetY`


we also set these to capture e.offsetX, e.offsetY in the event listener every time the user clicks on the canvas because otherwise the lines will always start at the end of the previous line;

* at the end we increment hue and play with lineWidth;
