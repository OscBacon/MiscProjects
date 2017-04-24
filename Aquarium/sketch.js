fishes = [];
function preload() {
  img = loadImage("http://cdn.onlinewebfonts.com/svg/img_160853.svg");
}
function setup() {
  createCanvas(640,360);
  img.filter(INVERT);
  for (var i = 0; i <10; i++) {
    fishes[i] = new Fish(img,createVector(random(width),random(height)));
  }

  }

function draw() {
  background(0, 255, 232);
  for (var i = 0; i < fishes.length; i++) {
    fishes[i].update();
    fishes[i].show();
  }
  }
