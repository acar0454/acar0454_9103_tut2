// Tut 2, Group G
// Creative coding major project
// Variation on Mondrian's 'Broadway Boogie Woogie'

// Create variables to hold values for buttons to play different music tracks on mouse press:
let song1;
let song2;
let button1;
let button2;

function preload() {
  song1 = loadSound('libraries/audio/pixabay_Musictown_funky-dance-pop-1-95460.mp3');
  song2 = loadSound('libraries/audio/pixabay_juliusH_big-apple-jazzy-piano-and-bass-music-13305.mp3');
}

// Create variables to hold values for creating rectangles:
let number = 30;
let rectSpacing = 10;
const numberOfaqua = 8;
const colors = ['#08527d', '#1678A2', '#093169'];
const colors2 = ['#Bffbfd', '#083360', '#2a91a4'];

// Create arrays to store multiple classes of rectangles:
let rectangles = [];
let rectanglesBig = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position = (400, 400); // Position canvas
  
  // Create buttons to play different music:
  button1 = createButton("Feeling funky? Click to play!");
  button1.mousePressed(togglePlaying);

  function togglePlaying() {
    if (song1.isPlaying()) {
      song1.pause();
      button1.html("Play that funky music!");
    } else {
      song1.play();
      song1.setVolume(0.3);
      button1.html("Pause");
    }
  }

  button2 = createButton("Feeling jazzy? Click to play ME!");
  button2.mousePressed(togglePlayingAgain);

  function togglePlayingAgain() {
    if (!song2.isPlaying()) {
      song2.play();
      song2.setVolume(0.3);
      button2.html("Pause me");
    } else {
      song2.pause();
      button2.html("More jazz please!");
    }
  }

  background('#000a0c');
  let y1 = random(0, 150);
  let y2 = y1;

  // Use width and height instead of width and height in rectangles below:
  // Top four aqua lines:
  for (let i = 0; i < 4; i++) {
    let aquaRectangle = new Rectangle(0, i * y1, width, 15, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }
  // Last four horizontal aqua lines:
  for (let i = 0; i < 4; i++) {
    let aquaRectangle = new Rectangle(0, 250 + i * y1 * 2, width, 15, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }


  // Left three vertical aqua lines:
  for (let i = 0; i < 3; i++) {
    let aquaRectangle = new Rectangle(i * y1, 0, 15, height, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }
  // Right three vertical aqua lines:
  for (let i = 0; i < 3; i++) {
    let aquaRectangle = new Rectangle(250 + i * y1 * 2, 0, 15, height, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }

  // Random small blocks:

  // 2
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(y2, i * (50 + rectSpacing), 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 3
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[j % colors.length];
      let randomRectangle = new Rectangle(y2 + (1 * y1), j * (100 + rectSpacing), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }

  // 4
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 - y1 * 2, (i * (50 + rectSpacing)), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  // 5
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(250 + y1 * 2, i * (35 + rectSpacing), 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 6
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 + y1 * 2, (i * (80 + rectSpacing)), 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }

  // 7
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(i * (50 + rectSpacing), y1 - y1, 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  // 8
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 9
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomColor = colors[i % colors.length];
      let randomRectangle = new Rectangle(i * (60 + rectSpacing), y1 + y1, 15, 15, randomColor);
      rectangles.push(randomRectangle);
    }
  }
  // 10
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y1 + y1 + y1, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }

  // 11
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (60 + rectSpacing), 250, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 12
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), 250 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 13
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (50 + rectSpacing), 250 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }
  // 14
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
    let randomRectangle = new Rectangle(i * (40 + rectSpacing), 250 + y1 * 2 + y1 * 2 + y1 * 2, 15, 15, randomColor);
    rectangles.push(randomRectangle);
  }

  noStroke();

  for (let i = 0; i < 15; i++) {
    // Randomly generate the position, size, and colour of block A:


    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);

    // Randomly generate the size of blocks B and C:
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10, 20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random(10, 20);

    // Randomly generate colours:

    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);


    // Create a block object and add it to an array:

    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Traverse the array and draw each rectangle:

  // Create groups of rectangles:
  for (let i = 0; i < numberOfRed; i++) {
    let redRectangle = new Rectangle(random(20, 100), 20, 20, 20, 'red');
    rectangles.push(redRectangle);
  }
  rectangles.push(new Rectangle(200, 100, 20, 20, 'blue'));
  rectangles.push(new Rectangle(100, 50, 20, 20, 'grey'));
  rectangles.push(new Rectangle(100, 250, 150, 20, 'yellow'));
  noStroke();


  for (let i = 0; i < 15; i++) {
    // Randomly generate the position, size, and colour of block A:

    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);


    // Randomly generate the size of blocks B and C:
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10, 20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random(10, 20);

    // Randomly generate colours:

    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);

    // Create a block object and add it to an array:

    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));

  }
}


function draw() {
  {
    background('#000a0c');
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

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].draw();
  }
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

/* References:
https://github.com/processing/p5.js/wiki/Beyond-the-canvas/5153b7ae243a8d685b511f8aaeca3bc8fa3ee0e8
https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
https://p5js.org/reference/#/p5/createButton
https://p5js.org/examples/sound-preload-soundfile.html
https://www.youtube.com/watch?v=YcezEwOXun4 (Buttons to play music)
*/