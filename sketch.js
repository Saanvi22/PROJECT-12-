var garden,rabbit;
var gardenImg,rabbitImg,appleImg,apple; 
var leaves,leafImg; 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png"); 
  leafImg = loadImage("leaf.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = 2 ; 
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

createApples ()
createLeaves()
  drawSprites();
}

function createApples(){
  
  apple = createSprite(random(50, 350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1; 
  apple.velocityY = 2 
  apple.lifetime = 50; 

}

function createLeaves(){
leaf = createSprite(random(50, 350),40,10,10);
leaf.addImage(leafImg); 
leaf.scale =0.1; 
leaf.velocityY = 2 
leaf.lifetime = 40; 
}

var select_sprites = Math.round(random(1,2)); 

if (frameCount % 80 == 0){
if (select_sprites == 1 ){
  createApples ()
}
else{
  createLeaves()
}
} 