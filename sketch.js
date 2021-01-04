const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree, treeIMG;
var boy, boyIMG;
var mangoObj1, mangoObj2, mangoObj3, mangoObj4, mangoObj5, mangoObj6, mangoObj7, mangoObj8, mangoObj9, mangoObj10;
var stone,chain;


function preload() {
	treeIMG = loadImage("IMG/tree.png");
	boyIMG = loadImage("IMG/boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width / 2, 600, width, 100);

	stone = new Stone(180, 435, 40);

	mangoObj1 = new Mango(770, 210, 25);
	mangoObj2 = new Mango(990, 100, 25);
	mangoObj3 = new Mango(955, 200, 25);
	mangoObj4 = new Mango(1000, 240, 25);
	mangoObj5 = new Mango(1050, 150, 25);
	mangoObj6 = new Mango(850, 150, 25);
	mangoObj7 = new Mango(880, 80, 25);
	mangoObj8 = new Mango(950, 140, 25);
	mangoObj9 = new Mango(870, 200, 25);
	mangoObj10 = new Mango(1100, 200, 25);

	tree = createSprite(920, 282, 20, 20);
	tree.addImage(treeIMG);
	tree.scale = 0.46;

	boy = createSprite(240, 480, 20, 20);
	boy.addImage(boyIMG);
	boy.scale = 0.12;

	chain = new slingShot(stone.body,{x:180,y:415});

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(200);

	detectCollision(stone,mangoObj1);
	detectCollision(stone,mangoObj2);
	detectCollision(stone,mangoObj3);
	detectCollision(stone,mangoObj4);
	detectCollision(stone,mangoObj5);
	detectCollision(stone,mangoObj6);
	detectCollision(stone,mangoObj7);
	detectCollision(stone,mangoObj8);
	detectCollision(stone,mangoObj9);
	detectCollision(stone,mangoObj10);

	display();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    chain.bhag();
}

function detectCollision(lstone,lmango) {
	if (lstone.body.position.x - lmango.body.position.x < lmango.radius + lstone.radius
		&& lmango.body.position.x - lstone.body.position.x < lmango.radius + lstone.radius
		&& lstone.body.position.y - lmango.body.position.y < lmango.radius + lstone.radius
		&& lmango.body.position.y - lstone.body.position.y < lmango.radius + lstone.radius) {
			Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:180,y:415});
		chain = new slingShot(stone.body,{x:180,y:415});
	}
}

function display() {
	drawSprites();
	ground.display();
	mangoObj1.display();
	mangoObj2.display();
	mangoObj3.display();
	mangoObj4.display();
	mangoObj5.display();
	mangoObj6.display();
	mangoObj7.display();
	mangoObj8.display();
	mangoObj9.display();
	mangoObj10.display();
	//chain.display();
	stone.display();
}
