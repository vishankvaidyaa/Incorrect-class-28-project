
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
treeImage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   mango1=new Mango(710,160,20);

   tree = createSprite(20,20,10,10);

	Engine.run(engine);
  
}


function draw() {

  tree.addImage(treeImage);
  
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  mango1.display();
  
  drawSprites();
 
}



