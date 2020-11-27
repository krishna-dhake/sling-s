const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block13,block20,block21,block22,
block23,block24,block25,block26,block27,pentagon;
var sling,ground1;
function setup() {
  createCanvas(1500,1500);
  //createSprite(400, 200, 1200, 800);
  engine = Engine.create();
  world = engine.world;


 ground = new Ground(900, 500, 400, 15);
 ground1 = new Ground(500, 800, 2000, 20);
 //block1 = new Block(870, 275, 30, 40);
 //block2 = new Block(700, 275, 30, 40);
 
  block3 = new Block(830, 305, 30 ,40);
  block4 = new Block(860, 305, 30 ,40);
  block5 = new Block(890, 305, 30 ,40);
  block6 = new Block(920, 305, 30, 40);
  block7 = new Block(950, 305, 30, 40);
  block8 = new Block(830, 265, 30, 40);
  block9 = new Block(860, 265, 30, 40);
  block10 = new Block(890, 265, 30, 40);
  block11 = new Block(920, 265, 30, 40);
  block12 = new Block(950, 265, 30, 40);
  block13 = new Block(860, 225, 30, 40);
  block14 = new Block(890, 225, 30, 40);
  block15 = new Block(920, 225, 30, 40);
  block16 = new Block(890, 185, 30, 40);
  block17 = new Block(800, 185, 30, 40);
  block18 = new Block(980, 185, 30, 40);
  block19 = new Block(980, 225, 30, 40);
  block20 = new Block(800, 225, 30, 40);
  block21 = new Block(1010, 185, 30, 40);
  block22 = new Block(770, 225, 30, 40);
  block23 = new Block(830, 250, 30, 40);
  block24 = new Block(860, 250, 30, 40);
  block25 = new Block(950, 250, 30, 40);
  block26 = new Block(920, 250, 30, 40);
  block27 = new Block(890, 50, 30, 40);


  //var polygon=Bodies.circle(800,700,20)
  pentagon=new Pentagon(300,400)
  sling=new Slingshot(pentagon.body,{x:300 , y:400})
  
  Engine.run(engine);

}

function draw() {

  background(255,255,255);  
  drawSprites();
 
  ground.display();
  //block1.display();
  //block2.display();
  fill("yellow")
  block3.display();
  fill("yellow")
  block4.display();
  fill("purple")
  block5.display();  
  fill("yellow")
  block6.display();
  fill("yellow")
  block7.display();
  fill("yellow")
  block8.display();
  fill("purple")
  block9.display();
  fill("purple")
  block10.display();
  fill("purple")
  block11.display();
  fill("yellow")
  block12.display();
  fill("purple")
  block13.display();
  fill("yellow")
  block14.display();
  fill("purple")
  block15.display();
  fill("yellow")
  block16.display();
  block17.display();
  fill("yellow")
  block18.display();
  fill("yellow")
  block19.display();
  fill("yellow")
  block20.display();
  fill("yellow")
  block21.display();
  fill("yellow")
  block22.display();
  fill("yellow")
  block23.display();
  fill("purple")
  block24.display();
  fill("yellow")
  block25.display();
  fill("yellow")
  block25.display();
  fill("purple")
  block26.display();
  fill("purple")
  block27.display();
  fill("purple")



  pentagon.display();
  sling.display();
  fill("yellow")
  ground1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
  
}