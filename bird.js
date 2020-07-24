class Bird{

        constructor(x,y){

        var options={
        restitution:0.3,
        friction:0.3,
        density:1
        }

        this.body=Bodies.rectangle(y,x,50,50,options);
        this.width=50
        this.height=50

        World.add(world,this.body);
        

    }
    display(){
        var pos= this.body.position;
        pos.x=mouseX
        pos.y=mouseY
        var angle= this.body.angle;

        push();
        fill("red");
        rectMode(CENTER);
        stroke("red")
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();


    }

}