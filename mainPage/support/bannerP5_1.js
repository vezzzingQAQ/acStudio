var headingMoverList=[];
function HeadingMover(){
    this.position=createVector(width/2,height/2);
    this.velocity=createVector(0,0);
    //this.acceleration=createVector(0,0.1);
    this.update=function(){
        this.acceleration=p5.Vector.random2D();
        this.acceleration.mult(0.5);//mult乘以标量延伸向量
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
    }
    this.checkEdges=function(){
        if(this.position.x<0 || this.position.x>width){
            this.velocity.x*=-1;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y*=-1;
        }
    }
    this.display=function(){
        stroke(sin(this.velocity.mag())*120+120,cos(this.velocity.mag()*2)*120+120,sin(this.velocity.mag()*3)*120+120,100);
        strokeWeight(2);
        push();
        rectMode(CENTER);
        translate(this.position.x,this.position.y);
        var angle=atan2(this.velocity.y,this.velocity.x);
        rotate(angle-PI/2);
        line(0,-30,0,0);
        line(-10,-10,0,0);
        line(10,-10,0,0);
        pop();
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    for(var i=0;i<50;i++){
        headingMoverList.push(new HeadingMover);
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(0,122);
    for(var i=0;i<headingMoverList.length;i++){
        headingMoverList[i].update();
        headingMoverList[i].checkEdges();
        headingMoverList[i].display();
    }
}
