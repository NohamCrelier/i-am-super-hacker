function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  fill(100, 200, 255, 150); // bleu clair semi-transparent
  ellipse(mouseX, mouseY, 20);

  fill(255, 100, 200, 150); // rose semi-transparent
  let miroirX = width - mouseX;
  let miroirY = height - mouseY
  ellipse(miroirX, miroirY, 20);
}
