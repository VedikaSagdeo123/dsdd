const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball_img
var ball
var g1


function preload() {
ball_img=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
     ball=createSprite(200,200,20,20)
     g1=new Ground(400,200,200,10)
}

function draw(){
    background(0)
    imageMode(CENTER)
    image(ball_img,ball.position.x,ball.position.y,40,40)
    Engine.update(engine);
    g1.display();
    drawSprites();
}

