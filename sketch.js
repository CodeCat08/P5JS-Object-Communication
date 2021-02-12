/*
This program demonstrates communication between objects. If the objects
intersect, the both become highlighted.
*/
let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < 100; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let radius = random(10,30);
    let tempBubble = new Bubble(x,y,radius);
    bubbles.push(tempBubble);
  }
}

function draw() {
  background(0);
  
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
    let overlapping = false;
    for(let j = 0; j < bubbles.length; j++) {
      if(bubbles[i] !== bubbles[j] && bubbles[i].isIntersecting(bubbles[j])) {
        overlapping = true;
      }
    }
    if(overlapping == true) {
      bubbles[i].setBrightness(255);
    }
    else {
      bubbles[i].setBrightness(0);
    }
  }
}//end draw()

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}
