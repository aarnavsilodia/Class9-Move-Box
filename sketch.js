var box;
function setup() {
  createCanvas(800,800);
  box = createSprite(400, 400, 50, 50)
}

function draw() 
{
  background(30);
  if(keyDown("UP_ARROW")){
    box.position.y = box.position.y - 3
  }
  if(keyDown("DOWN_ARROW")){
    box.position.y = box.position.y + 3
  }
  if (keyDown("LEFT_ARROW")) {
    box.position.x = box.position.x - 3
  }
  if (keyDown("RIGHT_ARROW")) {
    box.position.x = box.position.x + 3
  }
  drawSprites()

}




