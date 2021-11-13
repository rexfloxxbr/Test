var sprite;

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);

  drawSprites();

   if ( keyIsDown(RIGHT_ARROW) ) {
     sprite.x = sprite.x + 2;
   }

   if ( keyIsDown(LEFT_ARROW) ) {
    sprite.x = sprite.x - 2;
  }

  if ( keyIsDown(UP_ARROW) ) {
    sprite.y = sprite.y - 2;
  }

  if ( keyIsDown(DOWN_ARROW) ) {
   sprite.y = sprite.y + 2;
 }

}