class Ground {
    constructor(){
    
    var option = {
        isStatic: true
    }

    this.body = Bodies.rectangle(500,495,1000,10);
    this.width = 1000;
    this.height = 10;
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height)
    }
};