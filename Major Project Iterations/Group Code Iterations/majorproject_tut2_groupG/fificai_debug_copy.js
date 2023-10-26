
// let button;
let number = 30;
let rectSpacing = 10;
// // Add code to allow for responsive resizing of canvas to width and height of browser window:
// let imageProps = {aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0}; // Object made to hold the draw properties of the image
// let canvasAspectRatio = 0; // Variable for canvas aspect ratio
const numberOfyellow = 8;
const colors = ['#d2d1c1', '#4468bc', '#a4362a'];
const colors2 = ['#e9d22b', '#4468bc', '#a4362a'];

// Use arrays to store multiple classes of rectangles:
let rectangles = [];
let rectanglesBig = [];

function setup() {
  background('#f2f3ee');

  // Add button for user to turn on music: 
  //   button = createButton('Get jazzy!');
  //   button.position(10, 50);
  //   button.mousePressed(changeBG);
  // }

  // function changeBG() {
  //   let val = random(255);
  //   background(val);
  // }
  
  // resizeCanvas(windowWidth, windowHeight);
  // // Add code to allow for responsive resizing of canvas to width and height of canvas:
  // imageProps.aspect = image.width / image.height
  // canvasAspectRatio = width / height;
  // calculateImageProps();

  // function calculateImageProps() {
  //   //// If the image is wider than the canvas
  //   if (imageProps.aspect > canvasAspectRatio) {
  //     // Then we will draw the image to the width of the canvas:
  //     imageProps.width = width;
  //     // ... and calculate the height based on the aspect ratio:
  //     imageProps.height = width / imageProps.aspect;
  //     imageProps.yOffset = (height - imageProps.height) / 2;
  //     imageProps.xOffset = 0;
  //   } else if (imageProps.aspect < canvasAspectRatio) {
  //     // Otherwise, we will draw the image to the height of the canvas:
  //     imageProps.height = height;
  //     // ... and calculate the width based on the aspect ratio:
  //     imageProps.width = height * imageProps.aspect;
  //     imageProps.xOffset = (width - imageProps.width) / 2;
  //     imageProps.yOffset = 0;
  //   }
  //   else if (imageProps.aspect == canvasAspectRatio) {
  //     // If the aspect ratios are the same, then we draw the image to the canvas size:
  //     imageProps.width = width;
  //     imageProps.height = height;
  //     imageProps.xOffset = 0;
  //     imageProps.yOffset = 0;
  //   }
  // }

  let y1 = random(0, 150);
  let y2 = y1;

  // Top four yellow lines
  for (let i = 0; i < 4; i++) {
    let yellowRectangle = new Rectangle(0, i * y1, windowWidth, 15, '#e9d22b');
    rectangles.push(yellowRectangle);
  }
  // Last four horizontal yellow lines
  for (let i = 0; i < 4; i++) {
    let yellowRectangle = new Rectangle(0, 250 + i * y1 * 2, windowWidth, 15, '#e9d22b');
    rectangles.push(yellowRectangle);
  }


  // Left three vertical yellow lines
  for (let i = 0; i < 3; i++) {
    let yellowRectangle = new Rectangle(i * y1, 0, 15, windowHeight, '#e9d22b');
    rectangles.push(yellowRectangle);
  }
  // Right three vertical yellow lines
  for (let i = 0; i < 3; i++) {
    let yellowRectangle = new Rectangle(250 + i * y1 * 2, 0, 15, windowHeight, '#e9d22b');
    rectangles.push(yellowRectangle);
  }

  // Random small blocks
  //2
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(y2, i * (50 + rectSpacing), 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  //3
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[j % colors.length];
      let randomRectangle = new Rectangle(y2 + (1 * y1), j * (100 + rectSpacing), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }

  //4
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 - y1 * 2, (i * (50 + rectSpacing)), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  //5
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(250 + y1 * 2, i * (35 + rectSpacing), 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  //6
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 + y1 * 2, (i * (80 + rectSpacing)), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }

  //7
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(i * (50 + rectSpacing), y1 - y1, 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  //8
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  //9
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(i * (60 + rectSpacing), y1 + y1, 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  //10
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y1 + y1 + y1, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }

  //11
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (60 + rectSpacing), 250, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  //12
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), 250 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  //13
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (50 + rectSpacing), 250 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  //14
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (40 + rectSpacing), 250 + y1 * 2 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }


  noStroke();


  for (let i = 0; i < 15; i++) {
    // Randomly generate the position, size, and color of block a

    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);

    // Randomly generate the size of blocks b and c
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10, 20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random(10, 20);

    // Randomly generate colors

    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);



    // Create a block object and add it to an array


    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));

  }
}

function draw() {
  // Traverse the array and draw each rectangle

  // Create groups of rectangles
  for (let i = 0; i < numberOfRed; i++) {
    let redRectangle = new Rectangle(random(20, 100), 20, 20, 20, 'red');
    rectangles.push(redRectangle);
  }
  rectangles.push(new Rectangle(200, 100, 20, 20, 'blue'));
  rectangles.push(new Rectangle(100, 50, 20, 20, 'grey'));
  rectangles.push(new Rectangle(100, 250, 150, 20, 'yellow'));
  noStroke();


  for (let i = 0; i < 15; i++) {
    // Randomly generate the position, size, and color of block a


    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);


    // Randomly generate the size of blocks b and c
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10, 20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random(10, 20);

    // Randomly generate colors

    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);

    // Create a block object and add it to an array


    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));


  }
}



function draw() {
  background(255);
  // Draw rectangle:

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
  push();
  rectMode(CENTER);

  for (let i = 0; i < rectanglesBig.length; i++) {
    rectanglesBig[i].draw();

  }
  pop();
}

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}




/* Code references:
https://p5js.org/reference/#/p5/createButton
