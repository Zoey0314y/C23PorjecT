var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxposition = width/2 - 100;
	boxY = 600;

	leftSprite=createSprite(boxposition,boxY,20,100);
	leftSprite.shapeColor = "white";
	leftbody = Bodies.rectangle(boxposition + 20,boxY,20,100,{isStatic : true});
	World.add(world,leftbody);
	
	rightSprite=createSprite(boxposition + 200,boxY,20,100);
	rightSprite.shapeColor = "white";
	rightbody = Bodies.rectangle(boxposition + 200 - 20,boxY,20,100,{isStatic : true});
	World.add(world,rightbody);
	
	bottomSprite=createSprite(boxposition + 100,boxY + 40,200,20);
	bottomSprite.shapeColor = "white";
	bottombody = Bodies.rectangle(boxposition + 100,boxY + 45 - 20,200,20,{isStatic : true});
	World.add(world,bottombody);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic : true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic : true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	
	
  }
}

