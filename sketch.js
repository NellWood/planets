function setup() {
  resizeCanvas(300, 300);
  background(0);
}

function drawPlanet(x, y, radius) {
  
  stroke(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  ellipse(x, y, 100, 100);
  
  
}

function mouseClicked() {
  drawPlanet(mouseX, mouseY, random(100));
}