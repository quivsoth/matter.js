function Boundary(x,y,w,h){
    var options = {
        friction: 0,
        restitution: 0,
        isStatic: true
    }


    this.body = Bodies.rectangle(x,y,w,h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    this.show = function() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(123);
        stroke(123);
        rectMode(CENTER);
        rect(0,0, this.w, this.h);
        pop();
    }
}