let timer = 2000;
let nextChange = timer; 

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  if (millis() > nextChange) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    background(r, g, b);
    nextChange = millis() + timer;
    console.log(`time elapsed: ${round(millis() / 2000)}`);
  }
}