class String {
    constructor(body1, point2) {
        this.sling = Matter.Constraint.create({
            bodyA: body1,
            pointB: point2,
            stiffness: 0.2,
            length:100
        })
        World.add(world, this.sling);
    }

    display() {
        push();
        stroke(255);
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x,this.sling.pointB.y);
        pop();
    }
}