var log1;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,570,1200,20);
  log1=new Bin(900,320,300,300);
  ball=new Ball(80,450);
  
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  ball.display();
  log1.display();
  ground.display();
  

  drawSprites();

}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-100});
	}
}