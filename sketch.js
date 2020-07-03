const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1,ground,bar1,bar2,bar3,barImage,rope1;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1536,700);
    engine = Engine.create();
    world = engine.world;

    
    box1 = new Box(150,500,50,50);
    ground = new Ground2(1536/2,698,1536,20);

 rope1 = new launcher(box1.body,{x:150,y:450});
    
    
   barImage = new Ground(1250,600,200,20);
   bar1 = new Ground(1150,600,20,200);
   bar2 = new Ground(1350,600,20,200);
}  

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    ground.display();

   rope1.display();
   
   barImage.display();
}
/*function keyPressed() {
    if(keyCode === UP_ARROW){
       Matter.Body.applyForce(box1.body,box1.body.position,{x:340,y:-340});
    }
}
*/

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    rope1.fly();
    gameState = "launched";
}