class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
      
        this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    attach(body){

       this.Rope.bodyA = body;
    }

    fly(){
       this.Rope.bodyA = null;
    }

    display(){
    if(this.Rope.bodyA){
      var pointA = this.Rope.bodyA.position;
      var pointB = this.pointB
    
    
      //stroke("black");
     
        strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
    }
    
