class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':1.2,
        'density':2.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    imageMode(CENTER);
    fill(255);
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  }
};
