//Balls in classic Newton physics on the ground
function OnGroundBall3D(x,y,z,vx,vy,vz,mass,edgew1,edgew2,edgh){
    this.position=createVector(x,y,z);
    this.velocity=createVector(vx,vy,vz);
    this.acceleration=createVector(0,0,0);
    this.mass=mass;
    this.applyForce=function(force){//apply force
        var f=force.copy();
        this.acceleration.add(f.div(this.mass));
    }
    this.update=function(){//update the state of the ball
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    this.limitVelocity=function(value){
        this.velocity.limit(value);
    }
    this.limitAcceleration=function(value){
        this.acceleration.limit(value);
    }
    /*
    //interact with different objects
    this.checkIsInside=function(liquid){//judge whether the ball is in the liquid
        if(this.position.x>liquid.x && this.position.x<liquid.x+liquid.w && 
        this.position.y>liquid.y && this.position.y<liquid.y+liquid.h){
            return(true);
        }else{
            return(false);
        }
    }
    this.addLiquidDrag=function(liquid){//apply force
        var speed=this.velocity.mag();
        var dragMagnitude=liquid.c*speed*speed;
        var liquidDrag=this.velocity.copy();
        liquidDrag.mult(-1);
        liquidDrag.normalize();
        liquidDrag.mult(dragMagnitude);
        this.applyForce(liquidDrag);
    }
    this.applyLiquidDrag=function(liquidList){//judge and apply
        for(var i=0;i<liquidList.length;i++){
            if(this.checkIsInside(liquidList[i])){
                this.addLiquidDrag(liquidList[i]);
            }
        }
    }*/
    //addForces
    this.applyGravity=function(g){//F-g
        gravity=createVector(0,this.mass*g,0);
        this.applyForce(gravity);
    }
    this.applyFriction=function(c){//F-f
        var friction=this.velocity.copy();
        friction.mult(-1);
        friction.normalize();
        friction.mult(c);
        this.applyForce(friction);
    }
    this.applyAirDrag=function(c){//F-fAirG
        var speed=this.velocity.mag();
        var dragMagnitude=c*speed*speed;
        var airDrag=this.velocity.copy();
        airDrag.mult(-1);
        airDrag.normalize();
        airDrag.mult(dragMagnitude);
        this.applyForce(airDrag);
    }
    this.checkEdges=function(){//check if the ball hit the edge
        if(this.position.x<-edgew1 || this.position.x>edgew1){
            if(this.position.x<-edgew1){
                this.position.x=-edgew1;
            }else{
                this.position.x=edgew1;
            }
            this.velocity.x*=-1;
        }
        if(this.position.y<-edgh || this.position.y>edgh){
            if(this.position.y<-edgh){
                this.position.y=-edgh;
            }else{
                this.position.y=edgh;
            }
            this.velocity.y*=-1;
        }
        if(this.position.z<-edgew2 || this.position.z>edgew2){
            if(this.position.z<-edgew2){
                this.position.z=-edgew2;
            }else{
                this.position.z=edgew2;
            }
            this.velocity.z*=-1;
        }
    }
    this.checkEdges_ball=function(r){//check if the ball hit the edge
        if(this.position.x-r<-edgew1 || this.position.x+r>edgew1){
            if(this.position.x-r<-edgew1){
                this.position.x=-edgew1+r;
            }else{
                this.position.x=edgew1-r;
            }
            this.velocity.x*=-1;
        }
        if(this.position.y-r<-edgh || this.position.y+r>edgh){
            if(this.position.y-r<-edgh){
                this.position.y=-edgh+r;
            }else{
                this.position.y=edgh-r;
            }
            this.velocity.y*=-1;
        }
        if(this.position.z-r<-edgew2 || this.position.z+r>edgew2){
            if(this.position.z-r<-edgew2){
                this.position.z=-edgew2+r;
            }else{
                this.position.z=edgew2-r;
            }
            this.velocity.z*=-1;
        }
    }
    this.display=function(){//draw the ball on the canvas
        noStroke();
        fill(sin(this.acceleration.mag())*120+120,sin(this.velocity.mag())*120+120,sin(this.mass)*120+120);
        push();
        translate(this.position.x,this.position.y,this.position.z)
        box(this.velocity.mag());
        pop();
    }
    this.display_ball=function(r){
        noStroke();
        fill(222,120,20,100);
        specularMaterial(250);
        shininess(50);
        push();
        translate(this.position.x,this.position.y,this.position.z)
        sphere(r,50,50);
        pop();
    }
}
