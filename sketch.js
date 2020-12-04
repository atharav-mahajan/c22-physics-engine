const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

function setup(){

createCanvas(400,400)

engine = Engine.create();
world = engine.world;
var object_option = {
  isStatic : true
}
object = Bodies.rectangle(200,390,200,20,object_option)
World.add(world,object)
var ball_option = {
  restitution : 1.0
}
ball = Bodies.circle(200,100,20,ball_option)
World.add(world,ball)
}

function draw(){
background(0)

Engine.update(engine)
rectMode(CENTER)
rect(object.position.x,object.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

}