
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, m2, m3, m4, m5, m6, m7, m8, m9, m10;;
var world,boy,stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	m2=new mango(1000,325,35);
	m3=new mango(1010,260,35);
	m4=new mango(1200,200,35);
	m5=new mango(900,200,36);
	m6=new mango(970,150,35);
	m7=new mango(1105,300,33);
	m8=new mango(1200,260,35);
	m9=new mango(1040,200,35);
	m10=new mango(950,230,35);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  stone = new Stone(300,400,10)
  
  attach=new Throw(stones.body,{x:100,y:465});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);


  

  treeObj.display();
  mango1.display();

  detectCollision(stone,mango);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);
  detectCollision(stone,m10);

  if(KeyCode === 32){
    Matter.Body.applyForce();
  }

  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();

  groundObject.display();
  stone.display();
}

function detectCollision(lstones,lmango){

	//if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
	//	&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		//&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
    //&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		//Matter.Body.setStatic(lmango.body,false);
	//}

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}