var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(500, 200, 50, 50);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor= color(80,80,80);
  weight=random(30,52);
  bullet.velocityX=random(223,321); 
speed=bullet.velocityX;
thickness=random(22,83);
}

function draw() {
  background(0);  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight * speed* speed/(thickness*thickness*thickness);

    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    
    }
    
    if(damage<10 ){
      bullet.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hascollided (bullet,wall){
bulletRightEdge= bullet.x+ bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true; 
}

return false;


}