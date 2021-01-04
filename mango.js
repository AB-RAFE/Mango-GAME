class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            'restitution': 0,
            'friction': 1.0
        }
        this.radius=radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("IMG/mango.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}