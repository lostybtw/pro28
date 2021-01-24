class Stone{
    constructor(x,y,r){
        let opt={
            isStatic:true,
            restitution : 0.18
        }

        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x,y,r,opt)
        World.add(world,this.body);
    }

    display(){
        let pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,100,-100,50,50)
        pop()
    }

    
}