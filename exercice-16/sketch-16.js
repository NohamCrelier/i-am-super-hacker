let pulsation = 10;
let vitpulsation = 0.5;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(10, 10, 30);
  translate(width / 2, height / 2);
  
  stroke(200);
  strokeWeight(3);
  curve(-100, 300, -125, -30, 125, -30, 100, 300);
  strokeWeight(0);

  // œil
  fill(255);
  ellipse(0, 0, 200, 100);

  // iris
  let irisX = map(mouseX, 0, width, -20, 20);
  let irisY = map(mouseY, 0, height, -10, 10);
  fill(50, 100, 200);
  ellipse(irisX, irisY, 60, 60);

  pulsation += vitpulsation;

  if (pulsation > 25 || pulsation < 10) {
    vitpulsation *= -1;
  }

  fill(0);
  ellipse(irisX, irisY, pulsation, pulsation);
}
