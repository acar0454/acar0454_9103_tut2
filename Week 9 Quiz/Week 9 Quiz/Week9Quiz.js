// Define the initial variables for the position and size of the brush:
let rectX;
let rectY;
//let rectSize;
//let easing = 0.05;

function setup() {
  createCanvas(600, 600);
  background(255);
  frameRate(5);
  noStroke();

  // Give the brush a starting position:
  rectX = 0;
  rectY = 0;
}

function draw() {
  colorMode(HSBA);
  fill(random(360), 70, 160, 80);

  // Give the brush a starting and ending position by initialising variables:
  // let x = lerp(startX, endX, t);
  // let y = lerp(startY, endY, t);

  // Update interpolation factor with easing function:
  // t += (1-t) * 0.05;

  // Translate the origin to the center of the canvas:
  translate(width / 2, height / 2);

  // Define the number of sectors
  let sector = 20;
  // Use 'for' loops to create sets of patterns;
  for (let i = 0; i < sector; i++) {
    rectMode(CENTER);
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
  // startX += random(20, 10);
  // startY += 10;
  // endX += random(20, 10);
  // endY += 10;
  rectX += random(-20, 20);
  rectY += random(5);
}

function rectPainting(x, y) {
  // Use translate function to add some movement to the brush. Remember to use 'push' and 'pop' to 
  // start and restore the drawing state.
  push();
  translate(x, y);
  rect(0, 0, 50, 50);
  pop();
}
