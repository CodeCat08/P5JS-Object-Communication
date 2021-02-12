class Bubble {
  
  constructor(x = 100, y = 100, radius = 30) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.r = 50;
    this.g = 50;
    this.b = 50;
    this.brightness = 0;
  }

  contains(cursorX, cursorY) {
    let distance = dist(cursorX, cursorY, this.x, this.y);
    if (distance < this.radius) {
      return true;
    }
    else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(this.r,this.g,this.b);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  isIntersecting(other) {
    let distance = dist(this.x,this.y,other.x,other.y);
    if(distance < this.radius + other.radius) {
      return true;
    }
    else {
      return false;
    }
  }
  
  setBrightness(brightness) {
    this.brightness = brightness;
  }
}