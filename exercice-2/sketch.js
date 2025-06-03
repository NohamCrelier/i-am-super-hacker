function setup() {
  createCanvas(400, 400);
  background(100, 200, 100);
  
  for( let x = 0; x <= 400; x += 50 ){
    
    fill(x / 2)
    circle( width/2, x, 20);
    
    fill(x / 1)
    circle( x, height/2, 20);
  }
}