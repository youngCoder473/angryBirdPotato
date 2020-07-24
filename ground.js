class Ground{

constructor(x,y,width,height){

    var option ={
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width=width
    this.height=height
    World.add(world,this.body);
    
}

display(){
    fill("white");
    rectMode(CENTER);
    var posG= this.body.position;
    rect(posG.x,posG.y,this.width,this.height);

}


















}