function setup() {
  createCanvas(640, 480);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255, 204, 0);
  }
  ellipse(mouseX, mouseY, 30, 30);
}
