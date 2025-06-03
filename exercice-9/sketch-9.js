let posY = 0;
let posX = 0;
let vitY = 1.5;
let vitX = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  noStroke();
  rectMode(CORNER);
  fill(255, 221, 0);
  rect(0, 0, 150, 150);

  noStroke();
  rectMode(CORNER);
  fill(0, 102, 204);
  rect(250, posY, 150, 250);
  posY += vitY;
  if (posY > height - 250 || posY < 0) {
    vitY = -vitY;
  }

  noStroke();
  rectMode(CORNER);
  fill(204, 0, 0);
  rect(posX, 250, 120, 150);
  posX += vitX;
  if (posX > width - 120 || posX < 0) {
    vitX = -vitX;
  }
  
  stroke(0);
  strokeWeight(6);
  line(150, 0, 150, height);
  line(0, 150, width, 150);
  line(0, 250, width, 250);
  line(250, 0, 250, height);
  noStroke();
}
