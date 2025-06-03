let positions = [50, 100, 150, 200, 250];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 100, 200);

  for (let i = 0; i < positions.length; i+= 1) {
    ellipse(positions[i], height/2, 30, 30);

    positions[i] += 1;

    if (positions[i] > width) {
      positions[i] = 0;
    }
  }
}
