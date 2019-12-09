var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    World = Matter.World;

var engine;
//var engine2;
var world;
//var world2;
var boundaries = [];
var screenObjects = [];
var hero;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  //engine2 = Engine.create();
  world = engine.world;
  //world2 = engine2.world;
  engine.world.gravity.y = 0;
  //engine2.world.gravity.y = 0;
  //engine2.world.gravity.x = 1;
  //world.gravity = 0.4;  
  
  CreateWalls();
  CreateObjects();

  // ENGINE RUN
  Engine.run(engine);
  //Engine.run(engine2);
  // ENGINE RUN
}

function draw() {
  background(color('lightblue'));
  for(var i = 0; i < boundaries.length; i++) { boundaries[i].show(); }
  //Engine.update(engine);
  for(var i = 0; i < screenObjects.length; i++) {
      screenObjects[i].show();
      if(screenObjects[i].isOffScreen()){
        screenObjects[i].removeFromWorld();
        screenObjects.splice(i, 1);
        i--;
      }
  }
  //line(circles[0].body.position.x, circles[0].body.position.y,circles[1].body.position.x, circles[1].body.position.y)
  ControlKeys();
  //Matter.Engine.merge(engine, engine2);
}

function mousePressed() {
  // let choice = random(0,1);  
  // if (round(choice) == 1) { boxes.push(new Box(mouseX,mouseY,10, 20));}
  // else { circles.push(new Particle(mouseX,mouseY,10)); }
  // circles.push(new Particle(mouseX,mouseY,random(10,20)));
}


function ControlKeys() {
  var speed = 0.2;
  if (keyIsDown(UP_ARROW)) {
    screenObjects[0].body.position.y -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    screenObjects[0].body.position.y += speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    screenObjects[0].body.position.x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    screenObjects[0].body.position.x += speed;
  }
  
}

function CreateWalls() {
  boundaries.push(new Boundary(200, height, width, 100));
  boundaries.push(new Boundary(200, 0, width, 100));
  boundaries.push(new Boundary(0, 150, 50, height));
  boundaries.push(new Boundary(width - 225, 150, 50, height));
}

function CreateObjects() {
    hero = new Particle(250,150,random(10,20));
    var p2 = new Particle(350,100,random(10,20));
    screenObjects.push(hero);
    screenObjects.push(p2);

    // var p3 = new Pw2(150,150,random(10,20));
    // screenObjects.push(p3);

    // screenObjects.push(new Particle(100,10,random(10,20)));
    // screenObjects.push(new Particle(250,10,random(10,20)));
    // screenObjects.push(new Box(250,100,random(10,30),random(10,30  )));
    // screenObjects.push(new Box(250,10,random(10,30),random(10,30)));
    // screenObjects.push(new Box(250,10,random(10,30),random(10,30)));

    // var options = {
    //   bodyA: p1.body,
    //   bodyB: p2.body,
    //   length: 40,
    //   stiffness: 0,
    // }
    // var constraint = Constraint.create(options);
    // World.add(world, constraint);
}


this.fireBullet = function() {
  this.console.log("fired")
  // var bullet = new Particle(hero.body.position.x,hero.body.position.x,25);
  // screenObjects.push(bullet);
  
}