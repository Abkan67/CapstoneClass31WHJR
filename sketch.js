
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxes = [];
var ball;
var rope;
var mousedown = false;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	angleMode(DEGREES);
	World.add(world, Bodies.rectangle(400,700,800,20, {isStatic:true}));
	for (var c=0; c<100; c+=20){for(let r = 500; r < 580; r+=20){boxes.push(new Box(r,c,{density:(c*100)-90}));}}
	ball = new Ball(400,500);
	rope = new String(ball.body, {x:400,y:500});
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  push();
  fill(255);
  rect(400,700,800,20);
  pop();
  boxes.forEach((box, i)=>{box.display();})
  ball.display();
  rope.display();
  mousedown = false;
}

function mouseDragged(e) {
	ball.mousepos = {x:e.x,y:e.y};
	mousedown = true;

}