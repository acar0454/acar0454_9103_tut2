// Define the initial variables for the position and size of the brush:
let rectX;
let rectY;

function setup() {
  let canvas = createCanvas(400, 400);
  let canvasXPos = (windowWidth - width) / 2;
  let canvasYPos = (windowHeight - height) / 2;
  canvas.position(canvasXPos,canvasYPos);
  background(255);
  frameRate(9);
  noStroke();

  // Give the brush a starting position:
  rectX = 0;
  rectY = 0;
}

function draw() {
  colorMode(HSB);

  // Linear interpolation of hue, saturation and brightness to create more pleasing colour scheme:
  fill(lerp(200, 360, random()), lerp(50, 95, random()), lerp(100, 220, random()));

  // Translate the origin to the centre of the canvas (the canvas now in the centre of the page):
  translate(width / 2, height / 2);

  // Define the number of sectors
  let sector = 25;
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
  rectX += random(-5, 10);
  rectY += 5;
}

function rectPainting(x, y) {
  // Use translate function to add some movement to the brush. Remember to use 'push' and 'pop' to 
  // start and restore the drawing state.
  push();
  translate(x, y);
  let rectWidth = lerp(8, 10, 0.5);
  let rectHeight = lerp(14, 20, 0.5);
  rect(0, 0, rectWidth, rectHeight);
  pop();
}


// Inspiration from/reference to:
// --> https://github.com/processing/p5.js/wiki/Positioning-your-canvas
// --> https://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html
// --> https://p5js.org/reference/#/p5/lerpColor 