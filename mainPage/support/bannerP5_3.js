var moverList=[];
var attractorList=[];
var gravity=null;
function GravityObject(x,y,vx,vy,mass){//balls influence by gravity of the attractor
    this.position=createVector(x,y);
    this.velocity=createVector(vx,vy);
    this.acceleration=createVector(0,0);
    this.mass=mass;
    this.size=6.7;
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
    this.checkEdges=function(){//check if the ball hit the edge
        if(this.position.x<0 || this.position.x>width){
            if(this.position.x<0){
                this.position.x=0;
            }else if(this.position.x>width){
                this.position.x=width;
            }
            this.velocity.x*=-0.5;
        }
        if(this.position.y<0 || this.position.y>height){
            if(this.position.y<0){
                this.position.y=0;
            }else if(this.position.y>height){
                this.position.y=height;
            }
            this.velocity.y*=-0.5;
        }
    }
    this.display=function(){
        push();
        translate(this.position.x,this.position.y);
        var angle=atan2(this.velocity.y,this.velocity.x);
        rotate(angle+PI/2);
        fill(map(this.velocity.mag(),0,1.6,120,255),120,220);
        noStroke();
        beginShape();
        vertex(0,-this.size*2);
        vertex(-this.size,this.size*2);
        vertex(0,this.size*1);
        vertex(this.size,this.size*2);
        endShape();
        pop();
    }
}
function Attractor(x,y,mass){//objects create gravity
    this.position=createVector(x,y);
    this.mass=mass;
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    for(var i=0;i<1119;i++){
        moverList.push(new GravityObject(random(100,width-100),random(100,height-100),random(-0.5,0.5),random(-0.5,0.5),random(0.3,5)));
    }
    attractorList.push(new Attractor(random(100,width-100),random(100,height-100),11));
    for(var i=0;i<20;i++){
        attractorList.push(new Attractor(random(100,width-100),random(100,height-100),random(0.3,5)));
    }
    background(255);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(251,160);
    attractorList[0].position.x=mouseX;
    attractorList[0].position.y=mouseY;
    for(var i=0;i<moverList.length;i++){ 
        moverList[i].applyGravity(attractorList,1);
        moverList[i].checkEdges();
        moverList[i].limitVelocity(22.6);
        moverList[i].update();
        moverList[i].display();
    }
}