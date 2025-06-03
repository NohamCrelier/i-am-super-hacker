let objets = [];

class Bouncy {
  constructor(x, y, vx, vy, size, name) {
    this.posX = x;
    this.posY = y;
    this.vitX = vx;
    this.vitY = vy;
    this.size = size;
    this.name = name;
    this.color = [random(255), random(255), random(255)];
  }

  bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }

  rebondir() {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
      this.changerCouleur();
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
      this.changerCouleur();
    }
  }

  changerCouleur() {
    this.color = [random(255), random(255), random(255)];
  }
  afficher() {
    fill(this.color[0], this.color[1], this.color[2], 150);
    stroke(0);
    square(this.posX, this.posY, this.size);
    noStroke();
    fill(0);
    text(this.name, this.posX, this.posY - 4);
  }

  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
}

function setup() {
  createCanvas(400, 400);
  frameRate(60);

  objets.push(new Bouncy(100, 200, 2, 2, 19, "Amos"));
  objets.push(new Bouncy(50, 100, 4, 3, 25, "Ilan"));
  objets.push(new Bouncy(200, 300, -3, -2, 22, "Noham"));
}

function draw() {
  background(220, 220, 220, 20);

  for (let obj of objets) {
    obj.update();
  }
}