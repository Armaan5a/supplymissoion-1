var helicopterIMG, heli, pack,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);
	
	ground=createSprite(400,600,600,15);
	ground.shapeColor=("green")

    engine = Engine.create();
	myworld = engine.world;

	packageBody = Bodies.circle(400,200,5,{restitution:0.8,isStatic:true});
	World.add(myworld, packageBody);
	
	grounds = Bodies.rectangle(400,580,600,10,{isStatic:true});
 	World.add(myworld, grounds);

	 pack=createSprite(30,40,10,10);
	 pack.addImage(packageIMG)
	 pack.scale=0.2
 
    heli=createSprite(400, 200, 10,10);
	heli.addImage(helicopterIMG)
	heli.scale=0.6
}

function draw() {
  background(231,234,15);
  rectMode(CENTER);
  
  pack.x=packageBody.position.x
  pack.y=packageBody.position.y
 
  Engine.update(engine);
 
  if(keyDown("Down")){
	Matter.Body.setStatic(packageBody,false)  
  }
 
  drawSprites();
 }	



