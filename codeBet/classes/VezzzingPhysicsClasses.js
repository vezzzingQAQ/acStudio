/*
OnGroundBall(mass)
Liquid(x,y,w,h,c)
GravityObject(x,y,vx,vy,mass,mode)
Attractor(x,y,mass)
*/

//Balls in classic Newton physics on the ground
function OnGroundBall(mass){
    this.position=createVector(10,height/3);
    this.velocity=createVector(0.1,0);
    this.acceleration=createVector(0,0);
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
    }
    //addForces
    this.applyGravity=function(g){//F-g
        gravity=createVector(0,this.mass*g);
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
        if(this.position.x<0 || this.position.x>width){
            this.velocity.x*=-1;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y*=-1.03;
        }
    }
    this.display=function(){//draw the ball on the canvas
        noStroke();
        fill(sin(this.acceleration.mag())*120+120,sin(this.velocity.mag())*120+120,sin(this.mass)*120+120,200);
        circle(this.position.x,this.position.y,this.velocity.mag()*2);
    }
}
//Classic liquid, create drag to classic balls
function Liquid(x,y,w,h,c){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.c=c;
    this.display=function(){
        noStroke();
        fill(100,50);
        rect(this.x,this.y,this.w,this.h);
    }
}

//balls on gravity scales Seperated
function GravityObject(x,y,vx,vy,mass,mode){//balls influence by gravity of the attractor
    this.position=createVector(x,y);
    this.velocity=createVector(vx,vy);
    this.acceleration=createVector(0,0);
    this.mass=mass;
    this.mode=mode;
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
    //apply universal gravity
    this.applyGravityMutual=function(attractor,g){
        var force=p5.Vector.sub(this.position,attractor.position);
        var distance=force.mag();
        var strength=(g*attractor.mass*attractor.mass)/(distance*distance);
        force.normalize();
        force.mult(-strength);
        this.applyForce(force);
    }
    this.applyGravity=function(attracotrList,g){
        for(i=0;i<attracotrList.length;i++){
            this.applyGravityMutual(attracotrList[i],g);
        }
    }
    //apply universal rejection
    this.applyRejectionMutual=function(attractor,g){
        var force=p5.Vector.sub(this.position,attractor.position);
        var distance=force.mag();
        var strength=(g*attractor.mass*attractor.mass)/(distance*distance);
        force.normalize();
        force.mult(strength);
        this.applyForce(force);
    }
    this.applyRejection=function(attracotrList,g){
        for(i=0;i<attracotrList.length;i++){
            this.applyRejectionMutual(attracotrList[i],g);
        }
    }
    
    this.display=function(){
        noStroke();
        if(this.mode==2){
            fill(sin(this.acceleration.mag())*120+120,sin(this.velocity.mag())*120+120,sin(this.mass)*120+120,20);
            circle(this.position.x,this.position.y,1);
        }else if(this.mode==1){
            fill(sin(this.acceleration.mag())*120+120,sin(this.velocity.mag())*120+120,sin(this.mass)*120+120,200);
            circle(this.position.x,this.position.y,3);
        }
    }
}
function Attractor(x,y,mass){//objects create gravity
    this.position=createVector(x,y);
    this.mass=mass;
    this.display=function(){
        noStroke();
        fill(255,255,0,100);
        circle(this.position.x,this.position.y,this.mass*2);
    }
}