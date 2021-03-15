const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;
const Constraint=Matter.Constraint;


var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22box23,box24,box25,box26,box27,box28;

var superhero,superheroImage;
var monster,monsterImage;
var ground;

var chain;
var backgroundImage;

function preload()
{

   monsterImage=loadImage("images/Monster-01.png");
}

function setup() 
{
  createCanvas(1350,600);

  engine=Engine.create();
  world=engine.world;

  
 ground=new Ground(500,550,1300,20);
 //block1
 box1=new Box(600,100,60,60);
 box2=new Box(600,100,60,60);
 box3=new Box(600,100,60,60);
 box4=new Box(600,100,60,60);
 box5=new Box(600,100,60,60);
 box6=new Box(600,100,60,60);
 box7=new Box(600,100,60,60);
 
 //block2
 box9=new Box(700,100,60,60);
 box10=new Box(700,100,60,60);
 box11=new Box(700,100,60,60);
 box12=new Box(700,100,60,60);
 box13=new Box(700,100,60,60);
 box14=new Box(700,100,60,60);

 //block3
 box15=new Box(800,100,60,60);
 box16=new Box(800,100,60,60);
 box17=new Box(800,100,60,60);
 box18=new Box(800,100,60,60);
 box19=new Box(800,100,60,60);
 box20=new Box(800,100,60,60);
 box21=new Box(800,100,60,60);
 box27=new Box(800,100,60,60);

 //block4
 box22=new Box(900,100,60,60);
 box23=new Box(900,100,60,60);
 box24=new Box(900,100,60,60);
 box25=new Box(900,100,60,60);
 box26=new Box(900,100,60,60);

 superhero=new Superhero(500,300,50);

 monster=new Monster(1100,400,100)

  chain=new Chain(superhero.body,{x:300,y:40})
}

function draw() 
{
  background(220); 

  Engine.update(engine);

  ground.display();
  //block1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
 

  //block2
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  //block3
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box27.display();

  //block4
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
 



  superhero.display();
  chain.display();
  monster.display();

  
}

function mouseDragged()
{
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}
