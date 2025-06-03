function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  background(80, 140, 250);
  
  translate(width / 2, height / 2);

  let pulse = map(sin(frameCount * 5), -1, 1, 50, 80);
  fill(255, 204, 0);
  noStroke();
  ellipse(0, 0, pulse);

  stroke(255, 204, 0);
  strokeWeight(4);
  let rays = 12;
  for (let i = 0; i < rays; i++) {
    push();
    rotate(i * 360 / rays + frameCount * 2);
    line(pulse / 2, 0, pulse / 2 + 40, 0);
    pop();
  }
}
