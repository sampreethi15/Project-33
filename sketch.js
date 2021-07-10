const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snowFlakes = [];
var engine, world;
var snowMan;
//var snow;//, snowImg;
var bgImg;
function preload(){
  bgImg = loadImage("snow2.jpg");
 //snowImg = loadImage("snow4.webp");
}
function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //snowMan = new Snowman(100, 750, 50);
  //snowMan2 = new Snowman(100, 700, 40);
  //snowMan3 = new Snowman(100, 650, 30);
  //snow2 = new Snow(300, 80, 25);
 // snow = createSprite(400, 200, 50, 50);
  //snow.addImage(snowImg);
}

function draw() {
  background(bgImg); 
  Engine.update(engine);
  //snowMan.display();
 // snowMan2.display();
 // snowMan3.display();
  if(frameCount%30 === 0){
    snowFlakes.push(new Snow(Math.round(random(20, 550)), 10, 10));
  }
  //display the paricles 
  for(var h = 0;h< snowFlakes.length; h++){
   snowFlakes[h].display();
  }
  drawSprites();
}