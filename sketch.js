var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(100, 200, 50, 50);
  bullet.shapeColor = "white";
  speed = random(223, 321);
  weight = random (30, 52)
  bullet.velocityX = speed;

  fill(80, 80, 80);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(0);  

  //function to check damage
  if(collision(wall, bullet))
  { 
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if (damage<=10)
  {
    wall.shapeColor = "green";
  }
  else
  {
    wall.shapeColor = "red";
  }
}
  drawSprites();
}

//function to detect collision
function collision(w, b)
{
  if(w.x-b.x <= w.width/2+b.width/2)
  {
    bullet.velocityX = 0;
    return true;
  }
  else
  {
    return false;
  }
}
