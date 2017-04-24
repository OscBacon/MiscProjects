function Fish(img,pos) {
  this.pos = pos;
  this.vel = createVector(random(-2,2),random(-2,2));
  this.img = img;
  this.z = random(50,100);
  this.color = random(360);

  this.update = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width | this.pos.x < 0) {
      this.vel.x *= -1;
    }

    else if (this.pos.y > height | this.pos.y < 0) {
      this.vel.y *= -1;
    }
  }

  this.show = function() {
    push();
    colorMode(HSB);
    tint(this.color,100,100);
    image(img,this.pos.x,this.pos.y,this.z,this.z);
    pop();
  }
}
