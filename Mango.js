class Mango{
    constructor(a,b,r){

  var options={
    isStatic:true,
    restitution:0,
    friction:1,

  }

// var r = this.RADIUS;
//  var a = this.body.position.x;
//  var b= this.body.position.y;   
//   this.body.angle=angle;

  this.body = Matter.Bodies.circle(a,b,r, options);
 this.image=loadImage("Plucking mangoes/mango.png");

  World.add(world,this.body);

}

 display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
}