
var thickness,wall;
var bullet, weight,speed,deformation;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200, 50, 50);
  wall=createSprite(1000,200,60,200);
  speed=random(5,9);
  weight=random(4,15);
}


function draw() {
  background(255,255,255); 
  bullet.velocityX=speed;
  bullet.shapeColor="yellow"
  if(bullet.collide(wall)){
  deformation=0.5*weight*speed*speed*0.5
  }

  if (deformation<=100) {
    wall.shapeColor="green";
  }

  if (deformation>100&&deformation<=180) {
    wall.shapeColor="yellow";
  }

  if (deformation>180) {
    wall.shapeColor="red";
  }
  drawSprites();
}