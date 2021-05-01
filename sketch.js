var frect,mrect
function setup() {
  createCanvas(800,400);
  frect=createSprite(600, 200, 50, 50);
  frect.shapeColor="red"
  mrect=createSprite(200, 200, 50, 50);
  mrect.shapeColor="red"
}

function draw() {
  mrect.x=mouseX
  mrect.y=mouseY
  if(frect.x-mrect.x<mrect.width/2+frect.width/2&&
  mrect.x-frect.x<mrect.width/2+frect.width/2&&
  frect.y-mrect.y<mrect.height/2+frect.height/2&&
  mrect.y-frect.y<mrect.height/2+frect.height/2){
  mrect.shapeColor="green"
  frect.shapeColor="green"
  }
else{
  mrect.shapeColor="red"
  frect.shapeColor="red"
}
  
  background(255,255,255);  
  drawSprites();
}