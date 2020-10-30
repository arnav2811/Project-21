var bullet, wall;
var speed, weight, thickness;
var damage
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(233, 321))
  weight = random(30, 52);
  thickness = Math.round(random(22, 83))
  bullet = createSprite(50, 200, 50, 5);
  bullet.depth = 10;
  bullet .shapeColor="white";
  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = rgb(80, 80, 80);
 wall.depth = 1;
  bullet.velocityX = speed;
  
}

function draw() {
  background(rgb(50, 1150, 200));
hit(bullet, wall, damage,weight, speed, thickness);
  
  drawSprites();
}
