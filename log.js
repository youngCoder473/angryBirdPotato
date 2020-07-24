//creating the blueprint of box.
//while giving names to the class- the first letter has to be uppercase
class Log {
    //create 2 things
    //1. properties ->inside the constructor!
    //converting my constructor into arguments.
    constructor(x, y,h,angle) {
        //'this'-> points to the current object
        var option={
            restitution: 0.3,
            density: 1.0,
            friction: 0.3,
        }
        this.width=20;
        this.height=h;
        this.body = Bodies.rectangle(x, y, 20, h, option);
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);

    }

    display() {
        push();
        fill("white");
        var posBody = this.body.position;
        var angle=this.body.angle;
        translate(posBody.x,posBody.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

        pop();
        
    }







    //methods or also called as function


}