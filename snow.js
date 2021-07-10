class Snow {
    constructor(x,y,r){
        var options = {
            restitution: 0.4
                        }
    this.r = 50;
 this.image = loadImage("snow4.webp");
  this.body = Bodies.circle(x, y, this.r, options);
  //this.body.debug = true;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        //fill(this.color);
       ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
            }
}