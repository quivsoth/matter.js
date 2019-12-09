function Box(x,y,w,h){
    var options = {
        friction: 0.3,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x,y,w,h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(color('green'));
        stroke(121);

        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.w, this.h);
        pop();
    }

    this.isOffScreen = function() {
        let pos = this.body.position;
        return(pos.y > height + 100);
    }
}