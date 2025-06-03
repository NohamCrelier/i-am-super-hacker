function setup() {
  createCanvas(600, 400);
  background(0, 53, 122);
}

let taille = 1

function draw() {
  stroke(255)
  strokeWeight(2)
  noFill()
  circle(150, 100, taille)
  circle(450, 100, taille)
  circle(150, 300, taille)
  circle(450, 300, taille)
  circle(300, 200, taille)
  taille = taille + 5;
}