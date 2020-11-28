var arc1,arc2,arc3,arc4,arc5,arc6,arc7;
var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(500,500);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
}

function draw() {
  background(0,0,0);

  angleMode(DEGREES);

  fill("black");
  arc1 = arc(250, 250, 500, 500, 270, 270);

  fill("red");
  arc2 = arc(250, 250, 500, 500, 270, 179);

  fill("black");
  arc3 = arc(250, 250, 480, 480, 270, 270);

  fill("yellow");
  arc4 = arc(250, 250, 480, 480, 270, 205);

  fill("black");
  arc5 = arc(250, 250, 460, 460, 270, 270);

  fill("blue");
  arc6 = arc(250, 250, 460, 460, 270, 250);

  fill("black");
  arc7 = arc(250, 250, 440, 440, 270, 270);

  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7);
  line(60,250,250,250);
  pop();

  push();
  rotate(scAngle);
  stroke("yellow");
  strokeWeight(7);
  line(250,40,250,250);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(100,250,250,250);
  pop();

  drawSprites();
}