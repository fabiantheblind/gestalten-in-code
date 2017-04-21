var dis = 20;

function setup() {
  var canvas = createCanvas(500, 500);
  background(255);
  canvas.parent('sketch');
}

function drawLines(count, distance) {
  distance = distance || 20;

  for (var i = 0; i < count; i++) {
     var x = i * distance;

    line(x, 0, x, 500);
  }
}

function drawEllipsis(height) {
  strokeWeight(10);
  stroke(255, 255, 255);
  noFill();
  ellipse(250, 250, height);
}

function draw() {
  stroke(0);
  strokeWeight(2);
  drawLines(100, dis);

  drawEllipsis(100)

  fill(255);
  ellipse(250, 250, 35);

  drawEllipsis(150);
  drawEllipsis(240);
  drawEllipsis(300);
  drawEllipsis(340);
  drawEllipsis(400);
  drawEllipsis(440);
  drawEllipsis(500);
}
