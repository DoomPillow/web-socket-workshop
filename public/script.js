var socket = io()

socket.emit('new client')

function setup() {
  var canvas = createCanvas(400, 400)
  canvas.parent('sketch-holder')

  background("lightblue")

<<<<<<< Updated upstream
  clientCircle = {
    x: 100,
    y: 100, 
    color: 'blue'
  }
}

function draw() {
  fill(clientCircle.color)
  noStroke()
  ellipse(clientCircle.x, clientCircle.y, 25)
=======
  mouse_pos = { x: 0, y: 0 };
>>>>>>> Stashed changes
}

/****** DRAWING CODE  ******/

<<<<<<< Updated upstream
function mouseClicked() {
  clientCircle.x = mouseX
  clientCircle.y = mouseY

  if (clientCircle.color == 'blue') {
    clientCircle.color = "green"
  }
  else {
    clientCircle.color = "blue"
  }

  socket.emit('new circle', clientCircle)
}

function clearCanvas() {
  background("lightblue")
}

socket.on("new circle", function(serverCircle){
  clientCircle.x = serverCircle.x
  clientCircle.y = serverCircle.y
  clientCircle.color = serverCircle.color
})
=======
function draw() {
}

function mouseDragged() {

  mouse_pos.x = mouseX;
  mouse_pos.y = mouseY;

  strokeWeight(0);
  fill("red");
  ellipse(mouse_pos.x, mouse_pos.y, 10);

  socket.emit('new circle', mouse_pos);

}

function clearCanvas() {
  background("lightblue");
}

socket.on('new circle', function(newCircle) {
  ellipse(newCircle.x, newCircle.y, 10);
});
>>>>>>> Stashed changes
