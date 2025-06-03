let y = 0;
  

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(255, 20);

  let x = random(width);
  let size = random(5, 15);

  let r = random(255);
  let g = random(255);
  let b = random(255);

  noStroke();
  fill(r, g, b);
  
  ellipse(x, y, size);
  y += 2;
  if (y > height) {
  y = 0;
}



}
