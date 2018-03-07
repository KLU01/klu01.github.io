function setup() {
  createCanvas(screen.width, 480);
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
