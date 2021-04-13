class Box {
    constructor(x,y, options) {
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world, this.body);
    }

    display() {
        push();
        rotate(this.body.angle);
        rect(this.body.position.x,this.body.position.y,20,20);
        pop();
    }
}