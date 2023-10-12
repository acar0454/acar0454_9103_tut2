// Define the initial variables for the position and size of the brush:
let brushX;
let brushY;
// Name variable for size of brush:
let size;
let lineT;

function setup() {
createCanvas(600, 600);
background(255);
frameRate(10);
noStroke();

// Give the brush a starting position here by initialising the x and y variables:
brushX = 0;
brushY = 0;
}

function draw() {
colorMode(HSB);
fill(random(360), 60, 100);

// Translate the origin to the centre of the canvas:
translate(width/2, height/2);

// Define the number of sectors
let sector = 20;
// Use 'for' loops to create sets of patterns;
  for (let i = 0; i < sector; i++) {
    angleMode(DEGREES);
    let angle = 360/sector;
    // Use rotate function here to rotate the sectors:
    rotate(angle); 
  brushPainting(brushX, brushY);

  // Create another set of identical patterns in symmetry. Use scale function
  // with negative parameter to invert the pattern symmetrically.
  // We call scale() to the value of -1 on either of the two parameters, but
  // not both parameters: scale (-1, -1) will not create a symmetrical pattern.
  push();
  scale(-1, 1);
  brushPainting(brushX, brushY);
  pop();
  }
// Increment the position of brush over time - add some randomness to the brush path
brushX += random(-20, 20);
brushY += 20;
}

function brushPainting(x, y) {
// Use translate function to add some movement to the brush. Remember to use 'push' and 'pop' to 
// start and restore the drawing state.
push();
translate(x, y);
let size = 30;
ellipse(0, 0, size);
pop();
}

// // // // 
