// Tut 2, Group G - Huihui Cai, Han Zhang and Anna Carter
// Creative Coding Major Project
// Chosen artwork: Piet Mondrian's 'Broadway Boogie Woogie'

// // Create variables to hold values for buttons to play different music tracks on mouse press:
// let song1;
// let song2;
// let song3;
// let button1;
// let button2;
// let button3;

// function preload() {
//   song1 = loadSound('audio/pixabay_Musictown_funky-dance-pop-1-95460.mp3');
//   song2 = loadSound('audio/pixabay_juliusH_big-apple-jazzy-piano-and-bass-music-13305.mp3');
//   song3 = loadSound('audio/pixabay_grandproject_lady-of-the-80x27s-128379.mp3');
// }

// Create variables to hold values for creating rectangles:
const numberOfAqua = 8;
let numberOfCars = 30;
let carSpacing = 10;
const blueCars = ['#08527d', '#1678A2', '#093169'];
const blueCars2 = ['#Bffbfd', '#083360', '#2a91a4'];

// Create arrays to store values for classes of rectangles - roads, cars and blocks:
let roads = [];
let cars = [];
let blocks = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position = (200, 200); // Position the canvas

  // // Create buttons to play different music:
  // button1 = createButton("Take me to funkytown");
  // button1.position(10, 10);
  // button1.mousePressed(toggleFunkyMusic);

  // function toggleFunkyMusic() {
  //   if (song1.isPlaying()) {
  //     song1.pause();
  //     button1.html("Keep playing!");
  //   } else {
  //     song1.play();
  //     song1.setVolume(0.3);
  //     button1.html("Pause");
  //   }
  // }

  // button2 = createButton("I'm feeling jazzy");
  // button2.position(230, 10);
  // button2.mousePressed(toggleJazzyMusic);

  // function toggleJazzyMusic() {
  //   if (song2.isPlaying()) {
  //     song2.pause();
  //     button2.html("More jazz, please!");
  //   } else {
  //     song2.play();
  //     song2.setVolume(0.3);
  //     button2.html("Pause");
  //   }
  // }

  // button3 = createButton("I love the 80s!");
  // button3.position(400, 10);
  // button3.mousePressed(toggle1980Music);

  // function toggle1980Music() {
  //   if (song3.isPlaying()) {
  //     song3.pause();
  //     button3.html("Play me again!");
  //   } else {
  //     song3.play();
  //     song3.setVolume(0.3);
  //     button3.html("Pause");
  //   }
  // }

  background('#000a0c');

  //   // The long, thin, aqua-coloured rectangles (or, 'roads') will appear at a random
  //   // y position. The little blue rectangles (or, 'cars') will draw on the lines, so
  //   // they have same y position as the roads do. 

  let y1 = random(0, 150);
  let y2 = y1;

  // Use width and height instead of windowWidth and windowHeight to create 'roads':

  // Upper four aqua 'roads' (long, thin rectangles): 
  for (let i = 0; i < 4; i++) {
    let aquaRoad = new Rectangle(0, i * y1, width, 15, '#Bffbfd');
    roads.push(aquaRoad);
  }
  // Lower four horizontal aqua 'roads':
  for (let i = 0; i < 4; i++) {
    let aquaRoad = new Rectangle(0, 250 + i * y1 * 2, width, 15, '#Bffbfd');
    roads.push(aquaRoad);
  }

  // Left three vertical aqua 'roads':
  for (let i = 0; i < 3; i++) {
    let aquaRoad = new Rectangle(i * y1, 0, 15, height, '#Bffbfd');
    roads.push(aquaRoad);
  }
  // Right three vertical aqua 'roads':
  for (let i = 0; i < 3; i++) {
    let aquaRoad = new Rectangle(250 + i * y1 * 2, 0, 15, height, '#Bffbfd');
    roads.push(aquaRoad);
  }

  for (let i = 0; i < numberOfCars; i++) {
    const randomBlue = blueCars[i % blueCars.length];
    
    // Create a new Car instance and push it to the 'cars' array
    const newCar = new Car(0, i * y1, randomBlue);
    newCar.start(random(-2, 2)); // Set a random speed between -2 and 2
    cars.push(newCar);
  }

  // Log the array of cars to the console for verification
  console.log(cars);
  noStroke();
}

function draw() {

  // Display and move all cars in the array
  // Draw roads, cars and blocks:

  for (let i = 0; i < roads.length; i++) {
    roads[i].draw();
  }
  push();
  rectMode(CORNER);
  console.log(roads[i]);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    console.log(cars[i]);
  }

}




//   // Create small 'cars' along the aqua roads: new Rectangle (x, y, width, height, color)

//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Car(y2, i * (50 + carSpacing), randomBlue);
//     cars.push(randomCar);
//   }

//   // 1
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(y2, i * (50 + carSpacing), 15, 15, randomBlue);
//     cars.push(randomCar);
//   }
//   2
//   for (let j = 0; j < 5; j++) {
//     for (let i = 0; i < numberOfCars; i++) {
//       const randomBlue = blueCars[j % blueCars.length];
//       let randomCar = new Rectangle(y2 + (1 * y1), j * (100 + carSpacing), 15, 15, randomBlue);
//       cars.push(randomCar);
//     }
//   }

//   // 3
//   for (let j = 0; j < 5; j++) {
//     for (let i = 0; i < numberOfCars; i++) {
//       const randomBlue = blueCars[i % blueCars.length];
//       let randomCar = new Rectangle(250 + y1 * 2 - y1 * 2, (i * (50 + carSpacing)), 15, 15, randomBlue);
//       cars.push(randomCar);
//     }
//   }
//   // 4
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(250 + y1 * 2, i * (35 + carSpacing), 15, 15, randomBlue);
//     cars.push(randomCar);
//   }
//   // 5
//   for (let j = 0; j < 5; j++) {
//     for (let i = 0; i < numberOfCars; i++) {
//       const randomBlue = blueCars[i % blueCars.length];
//       let randomCar = new Rectangle(250 + y1 * 2 + y1 * 2, (i * (80 + carSpacing)), 15, 15, randomBlue);
//       cars.push(randomCar);
//     }
//   }

//   // 6
//   for (let j = 0; j < numberOfCars; j++) {
//     for (let i = 0; i < numberOfCars; i++) {
//       const randomBlue = blueCars[i % blueCars.length];
//       let randomCar = new Rectangle(i * (50 + carSpacing), y1 - y1, 15, 15, randomBlue);
//       cars.push(randomCar);
//     }
//   }
//   // 7
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(i * (30 + carSpacing), y2, 15, 15, randomBlue);
//     cars.push(randomCar);
//   }
//   // 8
//   for (let j = 0; j < numberOfCars; j++) {
//     for (let i = 0; i < numberOfCars; i++) {
//       const randomBlue = blueCars[i % blueCars.length];
//       let randomCar = new Rectangle(i * (60 + carSpacing), y1 + y1, 15, 15, randomBlue);
//       cars.push(randomCar);
//     }
//   }
//   // 9
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(i * (30 + carSpacing), y1 + y1 + y1, 15, 15, randomBlue);
//     cars.push(randomCar);
//   }

//   // 10
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(i * (60 + carSpacing), 250, 15, 15, randomBlue);
//     cars.push(randomCar);
//   }
//   // 11
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(i * (30 + carSpacing), 250 + y1 * 2, 15, 15, randomBlue);
//     cars.push(randomCar);
//   }
//   // 12
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(i * (50 + carSpacing), 250 + y1 * 2 + y1 * 2, 15, 15, randomBlue);
//     cars.push(randomCar);
//   }
//   // 13
//   for (let i = 0; i < numberOfCars; i++) {
//     const randomBlue = blueCars[i % blueCars.length];
//     let randomCar = new Rectangle(i * (40 + carSpacing), 250 + y1 * 2 + y1 * 2 + y1 * 2, 15, 15, randomBlue);
//     cars.push(randomCar);
//   }

//   noStroke();

//   for (let i = 0; i < 15; i++) {

//     // Randomly generate the position, size and colour of block A:
//     let x = random(width);
//     let y = random(height);
//     let widthA = random(30, 50);
//     let heightA = random(30, 50);

//     // Randomly generate the size of blocks B and C:
//     let widthB = widthA - random(10, 20);
//     let heightB = heightA - random(10, 20);
//     let widthC = widthA + random(10, 20);
//     let heightC = heightA + random(10, 20);

//     // Randomly generate colours from blues2 array:

//     let carColourA = random(blueCars2);
//     let carColourB = random(blueCars2);
//     let carColourC = random(blueCars2);

//     // Create a new block object and add it to an array:

//     blocks.push(new Rectangle(x, y, widthC, heightC, carColourC));
//     blocks.push(new Rectangle(x, y, widthA, heightA, carColourA));
//     blocks.push(new Rectangle(x, y, widthB, heightB, carColourB));
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background('#000a0c');

//   // Draw roads, cars and blocks (blocks):

//   for (let i = 0; i < roads.length; i++) {
//     roads[i].draw();
//   }
//   push();
//   rectMode(CORNER);

//   for (let i = 0; i < cars.length; i++) {
//     cars[i].draw();
//   }
//   push();
//   rectMode(CENTER);

//   for (let i = 0; i < blocks.length; i++) {
//     blocks[i].draw();
//   }
//   pop();

// }

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

class Car {
  constructor(x, y, carColour) {
    this.x = x;
    this.y = y;
    this.color = carColour;
    this.speed = 0;
  }
  start(speed) {
    this.speed = speed;
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, 20, 15);
  }
  move() {
    this.x += this.speed;
    // Wrap x value around boundaries of the canvas 'width':
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }
}


/* References:
Styling
https://github.com/processing/p5.js/wiki/Beyond-the-canvas/5153b7ae243a8d685b511f8aaeca3bc8fa3ee0e8
Loading audio files
https://p5js.org/examples/sound-preload-soundfile.html
Buttons
https://www.youtube.com/watch?v=YcezEwOXun4 
https://p5js.org/reference/#/p5/createButton
https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
Inspiration
Blue Boogie by Paisley Cross, 4 October 2023, CC BY-NC-SA 3.0 DEED - code not copied or modified.
https://openprocessing.org/sketch/2030919
Audio
song1: 'Funky Dance Pop 1'. Music by Musictown on Pixabay.
song2: 'Big Apple - Jazzy Piano and Bass Music'. Music by JuliusH on Pixabay.
song3: 'Lady of the 80s'. Music by Grand_Project on Pixabay.
*/


/* CHANGE LOG:

Tues 14 Nov
* Changed 'rectSpacing' variable to 'carSpacing'.
* Changed 'aquaRectangle' to 'aquaRoad'.
* Changed 'randomRectangle' to 'randomCar'.
* DID NOT CHANGE 'new Rectangle' because the first four 'for' loops refer to the 'roads'
and the rest refer to cars. Do you need separate variables names/classes?
* Changed 'blues' array to 'blueCars'.
* Changed 'blues2' array to 'blueCars2'.
* Changed 'number' to 'numberOfCars'.
* Changed 'colorA', 'colorB' and 'colorC' to 'carColourA', 'carColourB' and 'carColourC' respectively.
* Commented out //1 - //13 so small blocks (i.e. static 'cars') disappear in Live Server preview.
*/




