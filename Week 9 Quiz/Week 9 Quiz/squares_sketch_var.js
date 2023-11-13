let song;
let fft;
let spectrum = [];

  function mousePressed() {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.pause();
      background(200, 200, 200);
    } else {
      song.play();
      background(255, 180, 180);
    }
  }

function preload() {
  song = loadSound("sample-visualisation.mp3");
}

function setup() {
  colorMode(HSB);
  let canvas = createCanvas(500, 500);
  let canvasXPos = (windowWidth - width) / 2;
  let canvasYPos = (windowHeight - height) / 2;
  canvas.position(canvasXPos,canvasYPos);
  angleMode(DEGREES);
  mousePressed();
  fft = new p5.FFT(0.8, 64);
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  console.log(spectrum);
  noStroke();
  translate(width/2, height/2);
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 0, 100);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x,y);
  }
}


// let rectangles = [];
// let song;
// let fft;
// let lerpAmount;

// function preload() {
//   song = loadSound("sample-visualisation.mp3");
// }

// function setup() {
//   let canvas = createCanvas(800, 500);
//   let canvasXPos = (windowWidth - width) / 2;
//   let canvasYPos = (windowHeight - height) / 2;
//   canvas.position(canvasXPos,canvasYPos);
  

//   // The FFT object has TWO parameters, smoothing and bins (the number of frequency bands it measures).

//   // With the FFT, we can set the smoothing and the number of bands into which we split the frequence spectrum.
//   // We want a smooth spectrum, so we set the smoothing to 0.8. We also want to have 64 bands, so we set the number of bins to 64.
  
//   fft = new p5.FFT(0.8, 64);

//   // We create 64 rectangles (from our class definition) and store them in an array (one for each frequency band):
  
//   for (let i = 0; i < 64; i++) {
//     // Create a random colour:
//     let colour = color(random(255), random(255), random(255));
//     rectangles.push(
//       new Rectangle(random(100, width - 200), random(100, height - 200), colour)
//     );
//   }
  
//   // Then we connect the song (the audio player) to the FFT (the frequency analyser):
//   song.connect(fft);
// }

// function draw() {
//   // Checking if the user has interacted with the screen:
//   if (getAudioContext().state !== "running") {
//     background(0);
//     fill(255); // Set text colour to white
//     text("Click or tap here to play music", 10, 20, width - 20);
//     return;
//   }
  
//   background(255, 180, 180);

//   // Analyse the spectrum of the song:
//   let spectrum = fft.analyze();

//   // Set the lerp amount from the mouse position:
//   lerpAmount = map(mouseY, 0, height, 0, 1);

//   // Iterate through the rectangles and display them:
//   for (let i = 0; i < rectangles.length; i++) {
//     rectangles[i].display(spectrum[i]);
//   }
// }

//   function mousePressed() {
//     if (song.isPlaying()) {
//       // .isPlaying() returns a boolean
//       song.pause();
//       background(200, 200, 200);
//     } else {
//       song.play();
//       background(255, 180, 180);
//     }
//   }

// // A simple class for us to draw rectangles of random proportions and colours:
// class Rectangle {
//   constructor(x, y, colour) {
//     this.x = x;
//     this.y = y;
//     this.currentSize = 0;
//     this.colour = colour;
//   }

//   display(amp) {
//     // The target size is defined by the amplitude of the frequency band with a max of 100.
//     // Because the amplitude is between 0 and 255, we map the value to 0 and 100.
//     // If there was no amplitude, the target size would be 0 (and so would the current size).
    
//     let targetSize = map(amp, 0, 255, 0, 100);
    
//     // We lerp the current size to the target size:
//     this.currentSize = lerp(this.currentSize, targetSize, lerpAmount);
//     stroke(0);
//     fill(this.colour);
//     rect(this.x, this.y, this.currentSize, this.currentSize);
//   }
// }



// // References:
// // Class and constructor
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

// /* NOTES:
// Wed 08/11/23 - Tidied annotations. Changed number of rectangles in array from 16 to 64. Made music 'song.pause()' instead of 'song.stop()'.
// Centred canvas.
// */
