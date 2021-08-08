var vehicleList=[];
function getNormalPoint(p,a,b){
    var ap=p5.Vector.sub(p,a);
    var ab=p5.Vector.sub(b,a);
    ab.normalize();
    ab.mult(ap.dot(ab));
    normalPoint=p5.Vector.add(a,ab);
    return(normalPoint);
}
function Vehicle(positionX,positionY,vx,vy){
    this.position=createVector(positionX,positionY);
    this.velocity=createVector(vx,vy);
    this.acceleration=createVector(0,0);
    this.size=3;
    this.maxSpeed=8;
    this.maxForce=0.7;

    this.update=function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
    this.applyForce=function(force){
        this.acceleration.add(force);
    }
    this.seek=function(targetx,targety,desiredRaduis){
        var targetPosition=createVector(targetx,targety);
        desired=p5.Vector.sub(targetPosition,this.position);
        var d=desired.mag();
        desired.normalize();
        if(d<desiredRaduis){
            var m=map(d,0,desiredRaduis,0,this.maxSpeed);
            desired.mult(m);
        }else{
            desired.mult(this.maxSpeed);
        }
        steer=p5.Vector.sub(desired,this.velocity);
        steer.limit(this.maxForce);
        this.applyForce(steer);
    }
    this.separate=function(vehicleList){
        var sum=createVector(0,0);
        var desiredSeparation=100;
        var count=0;
        for(var i=0;i<vehicleList.length;i++){
            var d=p5.Vector.dist(this.position,vehicleList[i].position);
            if(d>0 && d<desiredSeparation){
                var diff=p5.Vector.sub(this.position,vehicleList[i].position);
                diff.normalize();
                diff.div(d);
                sum.add(diff);
                count+=1;
            }
        }
        if(count>0){
            sum.div(count);
            sum.normalize();
            sum.mult(this.maxSpeed);
            var steer=p5.Vector.sub(sum,this.velocity);
            steer.limit(this.maxForce);
            this.applyForce(steer);
        }
    }
    this.checkEdges=function(){
        if(this.position.x<0 || this.position.x>width){
            if(this.position.x<0){
                this.position.x=0;
            }else if(this.position.x>width){
                this.position.x=width;
            }
            this.velocity.x*=-1;
        }
        if(this.position.y<0 || this.position.y>height){
            if(this.position.y<0){
                this.position.y=0;
            }else if(this.position.y>height){
                this.position.y=height;
            }
            this.velocity.y*=-1;
        }
    }
    this.display=function(){
        push();
        translate(this.position.x,this.position.y);
        var angle=atan2(this.velocity.y,this.velocity.x);
        rotate(angle+PI/2);
        fill(255,this.velocity.mag()*20,map(this.velocity.mag(),0,this.maxSpeed,232,120),150);
        noStroke();
        beginShape();
        vertex(0,-this.size*2);
        vertex(-this.size,this.size*2);
        vertex(this.size,this.size*2);
        endShape();
        pop();
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    for(var i=0;i<300;i++){
        vehicleList.push(new Vehicle(random(350,width-350),random(300,height-300),random(-3,3),random(-3,3)));
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(255,50);
    for(var i=0;i<vehicleList.length;i++){
        vehicleList[i].checkEdges();
        vehicleList[i].seek(mouseX,mouseY,200);
        vehicleList[i].separate(vehicleList);
        vehicleList[i].update();
        vehicleList[i].display();
    }
}
