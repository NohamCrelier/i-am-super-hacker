function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {

  let cx = width / 2;
  let cy = height / 2;

  if (mouseX < cx) {
    background(100, 50, 200);
    fill(50, 100, 200);
    ellipse(cx, cy, 100, 100);
  } 
  else {
    background(50, 100, 200);
    fill(100, 50, 200);
    ellipse(cx, cy, 100, 100);
  }
}