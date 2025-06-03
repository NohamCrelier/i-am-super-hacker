let boxSize = 100;

let posX = 123;
let posY = 234;

let vitX = 2;
let vitY = 2;

let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r /3, v /3, b /3, 50);
  noStroke()
  square(posX, posY, boxSize)
  fill(r, v, b)
  posX = posX + vitX;
  posY = posY + vitY;
  
  if(posX + boxSize > width || posX < 0){
    vitX = vitX * -1;
      changeColor ()
  }
  
    if(posY + boxSize > height || posY < 0){
    vitY = vitY * -1;
      changeColor ()
  }
}

function changeColor (){
  r = Math.random() * 255;
  v = Math.random() * 255;
  b = Math.random() * 255;
}

function keyPressed(){
  if( key == "s"){
    save("drawing.png");
  }
}