
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backImg,manImg,man,treeImg,tree,mango,stone,mango1,mango2,mango3,mango4,mango5,rope;
function preload(){
	backImg=loadImage("sprites/jungle.jpg");
	manImg=loadImage("sprites/boy.png");
	treeImg=loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1000, 700);
    engine = Engine.create();
	world = engine.world;
	
	man = createSprite(250,550,40,100);
	man.addImage(manImg);
	man.scale=0.2;

	tree = createSprite(800,350,20,20);
	tree.addImage(treeImg);
	tree.scale=0.5;
	mango = new Mango(980,250,50,50);
	
	mango1 = new Mango(600,250,50,50);

	mango2 = new Mango(940,200,50,50);

	mango3 = new Mango(680,200,50,50);

	mango4 = new Mango(700,340,50,50);

	mango5 = new Mango(900,340,50,50);

	stone = new Stone(153,433,70,70);

    rope = new Rope(stone.body,{x:153, y:433});
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  fill("red");
  textSize(20);
  text("PLEASE HELP ME TO PICK SOME MANGOES",300,40);

  detectCollision(stone,mango);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);



  Engine.run(engine);
  man.display();
  tree.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  rope.display();
 
}

function mouseDragged(){
	 Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 }
 
 
 function mouseReleased(){
	 rope.fly();
 }

 function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance>=mango.r+stone.r){

	}
	Matter.Body.setStatic(mango.body,false);
 }

 function keyPressed(){
	 if(keyCode === 32){
		 Matter.Body.setPosition(stone.body,{x:63,y:433})
		 rope.attach(stone.body);
	 }
 }