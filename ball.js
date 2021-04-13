class Ball {
    constructor(xp,yp) {
        this.body = Bodies.circle(xp,yp,25,{restitution:2});
        World.add(world, this.body);
        this.mousepos = {x:xp, y:yp}
    }
    display() {
        if (mousedown == true) {
            Matter.Body.setPosition(this.body, this.mousepos);
        }
        push();
        ellipse(this.body.position.x,this.body.position.y, 50);
        pop();
    }
}