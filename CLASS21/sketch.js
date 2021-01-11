var fixedRect, movingRect, triangle1, traingle2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  triangle1 = createSprite(200,200,50,50)
  triangle2 = createSprite(300,300,50,50)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(istouching(movingRect,triangle2)){
  movingRect.shapeColor = "red";
  triangle2.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  triangle2.shapeColor = "green";
 }

  drawSprites();
}




