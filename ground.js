class Ground {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true,
            'friction':0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("#8B4513")
        rect(pos.x, pos.y, this.width, this.height);
    }
}