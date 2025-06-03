let coins = [];

function setup() {
  createCanvas(400, 400);
  
  coins = [
    [0, 0],
    [0, height],
    [width, 0],
    [width, height]
  ];
}

function draw() {
  background(255, 50);
  
  strokeWeight(12);
  stroke(200, 20, 100);
  
  for (let i = 0; i < coins.length; i+=1) {
    let x = coins[i][0];
    let y = coins[i][1];
    line(x, y, mouseX, mouseY);
  }
}