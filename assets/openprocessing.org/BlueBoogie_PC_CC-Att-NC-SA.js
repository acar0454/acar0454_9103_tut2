// 'Blue Boogie' by Paisley Cross 
// https://openprocessing.org/sketch/2030919
// Copy of original code
// CC BY-NC-SA 3.0 Deed Licence https://creativecommons.org/licenses/by-nc-sa/3.0/# 


function setup() {
  createCanvas(800, 800);
  background(10);
}
function draw() {

  ///////////squares
  noStroke();
  fill(41, random(100, 196), random(220, 255));

  square(500, random(height), 80);

  square(random(width), 100, 20);

  square(random(width), 600, 60);

  square(random(580, width), 350, 30);

  square(600, random(height), 10);

  square(620, random(height), 15);

  square(650, random(height), 20);

  square(690, random(height), 25);

  square(730, random(height), 30);

  square(780, random(height), 35);

  ////////line1
  stroke(0, random(50, 70), random(220, 255));
  line(200, random(200, 600), 500, 370);


  ////////line2
  stroke(50, 0, random(200, 255));
  line(200, random(200, 600), 0, 400);
  
  /////////circles
  
  noStroke();
  fill(random(100,178),244,255);
  circle(random(500),random(height),5);




}