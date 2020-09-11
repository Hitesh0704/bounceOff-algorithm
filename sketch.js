var fixedRect,movingRect;

function setup() {
  createCanvas(1600,800);
  fixedRect=createSprite(1400, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="red";

  movingRect.velocityX= 2;
  fixedRect.velocityX=-2;
}

function draw() {
  background("black");
  
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX=(-1)*movingRect.velocityX;
    fixedRect.velocityX=(-1)*fixedRect.velocityX;
  }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY=(-1)*movingRect.velocityY;
    fixedRect.velocityY=(-1)*fixedRect.velocityY;
  }
  drawSprites();
}