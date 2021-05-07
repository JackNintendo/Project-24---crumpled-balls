const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var middleRect,leftRect,rightRect;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	background("white");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ellipse(50,50,50);

	Engine.run(engine);

	paperObject = new Paper(200,450,40);

	middleRect = new Box(810, 650, 200, 20);
	leftRect = new Box(715, 590, 20, 150);
	rightRect = new Box(900, 590, 20, 150);

	ground= new Ground(width/2, height-35, width,10);	
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  middleRect.display();
  leftRect.display();
  rightRect.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

