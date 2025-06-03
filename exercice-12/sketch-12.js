function setup() {
  createCanvas(400, 400);
}

function draw() {
    
let r = random(255)
let v = random(255)
let b = random(255)
  stroke(r, v, b);
  strokeWeight(12)
  line(200, 200, mouseX, mouseY)
  
}