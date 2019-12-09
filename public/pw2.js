function Pw2(x,y,r){
    var options = {
        friction: 0.3,
        restitution: 0.6,
    }
    this.body = Bodies.circle(x,y,r, options);
    this.r = r;
    World.add(world2, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        fill(color('gold'));
        stroke(121);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0,0, this.r * 2);
        pop();
    }

    this.isOffScreen = function() {
        let pos = this.body.position;
        return(pos.y > height + 100);
    }

    this.removeFromWorld = function() {
        console.log("removeFromWorld");
        World.remove(world, this.body);
    }
}