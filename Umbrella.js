class Umbrella{
    constructor(x,y){
        var options = {
        isStatic:true

    }
    this.image=loadImage("Images/boy.png");
    this.umbrella = Bodies.circle(x,y,50,options);
    this.radius=50;
    World.add(world, this.umbrella)
    

    }
    display(){
        var pos = this.umbrella.position;   
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        
    }

};