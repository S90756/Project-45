var space, spaceimg
var spaceship, spaceshipimg

function preload() {
  spaceimg = loadImage("space.png")
  spaceshipimg = loadImage("spaceship3.gif")

}


function setup() {
  createCanvas(800, 400);
  space=createSprite(400,200)
  space.addImage(spaceimg)
  spaceship=createSprite(400,350,40,20)
  spaceship.addImage(spaceshipimg)
  spaceship.scale=0.2
}

function draw() {
  background(255, 255, 255);
  if(keyDown(LEFT_ARROW)){
    spaceship.x=spaceship.x-5
    
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x=spaceship.x+5
  }
  drawSprites();
}