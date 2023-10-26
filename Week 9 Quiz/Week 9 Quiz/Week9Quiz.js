// Define the initial variables for the position and size of the brush:
let rectX;
let rectY;
let brushSize;

function setup() {
  createCanvas(600, 600);
  background(255);
  frameRate(9);
  noStroke();

  // Give the brush a starting position:
  rectX = 0;
  rectY = 0;
}

function draw() {
  colorMode(HSB);
  fill(random(360), 70, 160, 10);

  // Translate the origin to the center of the canvas:
  translate(width / 2, height / 2);

  // Define the number of sectors
  let sector = 30;
  // Use 'for' loops to create sets of patterns;
  for (let i = 0; i < sector; i++) {
    rectMode(RADIUS);
    angleMode(DEGREES);
    let angle = 360 / sector;
    // Use rotate function here to rotate the sectors:
    rotate(angle);
    rectPainting(rectX, rectY);
  
    // Create another set of identical patterns in symmetry. Use scale function
    // with negative parameter to invert the pattern symmetrically.
    // We call scale() to the value of -1 on either of the two parameters, but
    // not both parameters: scale (-1, -1) will not create a symmetrical pattern.
    push();
    scale(-1, 1);
    rectPainting(rectX, rectY);
    pop();
  }
  // Increment the position of brush over time - add some randomness to the brush path:
  rectX += random(-20, 20);
  rectY += 7;
}

function rectPainting(x, y) {
  // Use translate function to add some movement to the brush. Remember to use 'push' and 'pop' to 
  // start and restore the drawing state.
  push();
  translate(x, y);
  let brushSize = 20;
  ellipse(0, 0, brushSize);
  pop();
}
