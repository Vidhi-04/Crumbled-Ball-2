class Bin {
    constructor(x, y,width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width =width;
      this.height = height;
      this.image = loadImage("Dustbin.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      image(this.image, pos.x+85, pos.y, this.width, this.height)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  }