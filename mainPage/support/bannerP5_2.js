var oscillatorList=[];
var rtx=0;
var rty=0;
var rtz=0;
function Oscillator(velocityX,velocityY,velocityZ,ampitudeX,ampitudeY,ampitudeZ){
    this.angle=createVector(0,0,0);
    this.velocity=createVector(velocityX,velocityY,velocityZ);
    this.ampitude=createVector(ampitudeX,ampitudeY,ampitudeZ);
    this.colorR=random(210,255);
    this.colorG=random(210,255);
    this.colorB=random(210,255);

    this.oscillate=function(){
        this.angle.add(this.velocity);
    }
    this.display=function(){
        var x=sin(this.angle.x)*this.ampitude.x;
        var y=sin(this.angle.y)*this.ampitude.y;
        var z=sin(this.angle.z)*this.ampitude.z;
        this.velocity.limit(3);
        strokeWeight(0.3);
        stroke(this.colorR,this.colorB,this.colorG);
        noFill();
        //line(0,0,0,x,y,z);
        push();
        translate(x,y,z);
        sphere(20,10,10);
        pop();
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    smooth();
    for(var i=0;i<31;i++){
        oscillatorList.push(new Oscillator(random(-0.03,0.03),random(-0.03,0.03),random(-0.03,0.03),random(-300,300),random(-300,300),random(-300,300)));
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){

    background(0)
    for(var i=0;i<oscillatorList.length;i++){
        oscillatorList[i].oscillate();
        oscillatorList[i].display();
    }
}
function mouseMoved(){
    rty=map(mouseX,-500,500,-2*PI,0);
    rotateY(rty);
    rtx=map(mouseY,500,-500,-2*PI,0);
    rotateY(rtx);
    return false;
}