
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
birdImg=loadImage("Skay.png")	
pipeImg=loadImage("Fa.png")	
pipe2Img=loadImage("bottom.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bird1 = new Bird()
   pipe1 = new Pipe()
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bird1.gravity()

 if(keyDown("space")){
	 bird1.moveUp()
 }
}



