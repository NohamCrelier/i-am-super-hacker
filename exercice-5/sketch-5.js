function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(255, 20);
  
  let r = map(mouseX, 0, width, 0, 255);
  let v = map(mouseY, 0, height, 0, 255);
  let b = 150;

  noStroke();
  rectMode(CENTER);
  fill(r, v, b);
  rect(200, mouseY, width, 50, 0);
}
