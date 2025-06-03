let stars = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  for (let i = 0; i < 100; i+=1) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(10, 10, 30);
  
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    let flicker = random(150, 255);
    fill(255, flicker);
    ellipse(s.x, s.y, s.size);
  }
}
