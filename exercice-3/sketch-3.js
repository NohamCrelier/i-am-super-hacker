function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  let r = random(0, 50);
  let g = random(150, 255);
  let b = random(0, 50);

  fill(r, g, b);
  noStroke();
  ellipse(mouseX, mouseY, 50, 20);
}
