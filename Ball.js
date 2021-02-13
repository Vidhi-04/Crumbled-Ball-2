class Ball {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.circle(x, y,20,options);
    this.radius=20;
    this.image = loadImage("Paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius*3, this.radius*3)
      fill("blue");
      //ellipse(0, 0,this.radius,this.radius);
      pop();
    }
  }