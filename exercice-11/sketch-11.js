function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(20);

  let spacing = 30;

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      let d = dist(x, y, width / 2, height / 2);
      let taille = map(d, 0, width / 2, 20, 5);

      let r = map(x, 0, width, 100, 255);
      let g = map(y, 0, height, 100, 255);
      let b = map(d, 0, width / 2, 255, 50);

      fill(r, g, b);
      ellipse(x, y, taille);
    }
  }
}
