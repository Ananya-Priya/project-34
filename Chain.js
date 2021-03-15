class Chain{

    constructor(body1,pointb){
        var options=
    {
        bodyA: body1,
        pointB: pointb,
        stiffness: 1.0,
        length: 250
    }
    
    this.chain=Constraint.create(options);
    World.add(world,this.chain); 
    }
   

    display(){
        if(this.chain.bodyA){
        
        var A=this.chain.bodyA.position;
        var B=this.chain.pointB;
        
        //line(A.x,A.y,B.x,B.y)
        }
    }
}