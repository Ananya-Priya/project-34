class Monster
{
    constructor(x,y,radius)
    {
        var options=
        {
                isStatic : false,
                restitution:0.04,
                friction:0.3,
                density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        this.image=loadImage("images/Monster-01.png");

        World.add(world,this.body);

    }

    display()
    {
       image(this.image,this.body.position.x,this.body.position.y,100,100 );
      
    }
}