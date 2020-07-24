//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxOne;
var boxTwo;
var boxThree;
var ground

function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    //new there is an object to be created!
    //immediately after new you write class name;
    boxOne = new Box(700,320,70,70);
    boxTwo = new Box(920, 320,70,70);
    pigOne = new Pig(810,320);
    logOne = new Log(810,300,300,PI*28.5);
    boxThree = new Box(700,240,70,70);
    boxFour = new Box(920,240,70,70);
    pigTwo = new Pig(810,240);
    logTwo = new Log(810,180,300,PI*28.5);
    ground = new Ground(600,height,1200,30);
    boxFive = new Box(810,160,70,70);
    logThree = new Log(760,120,150,PI/7);
    logFour = new Log(810,120,150,-PI/7);
    birdOne = new Bird(100,100);
}

function draw() {
    background(0);
    Engine.update(engine);
    boxOne.display();
    boxTwo.display();
    pigOne.display();
    logOne.display();
    boxThree.display();
    boxFour.display();
    pigTwo.display();
    logTwo.display();
    ground.display();
    boxFive.display();
    logThree.display();
    logFour.display();
    birdOne.display();
}