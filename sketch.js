
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bob1=new Bob(300,350)
	bob2=new Bob(330,350)
	bob3=new Bob(360,350)
	bob4=new Bob(390,350)
	bob5=new Bob(420,350)

	bobDiameter= 40;
	roof=new Roof(360,250,180,20)

	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter,0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof.display()
  keyPressed()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

 
}


function keyPressed() {
	if(keyCode===UP_ARROW){
		console.log("hello")
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:10,y:-10})
		
		

	}
}



