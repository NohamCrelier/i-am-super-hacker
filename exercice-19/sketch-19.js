function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(2);
  stroke(255);
}

function draw() {
  background(20, 40);

  translate(width / 2, height / 2);

  let pulse = map(sin(frameCount * 0.05), -1, 1, 50, 150);

  for (let i = 0; i < 5; i+=1) {
    let r = map(i, 0, 4, 50, 255);
    let g = map(i, 0, 4, 100, 50);
    let b = map(i, 0, 4, 200, 150);
    stroke(r, g, b);
    ellipse(0, 0, pulse + i * 30);
  }
}