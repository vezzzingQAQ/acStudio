var oscillatorList=[];
var rtx=0;
var rty=0;
var rtz=0;
function Oscillator(velocityX,velocityY,velocityZ,ampitudeX,ampitudeY,ampitudeZ){
    this.angle=createVector(0,0,0);
    this.velocity=createVector(velocityX,velocityY,velocityZ);
    this.ampitude=createVector(ampitudeX,ampitudeY,ampitudeZ);
    this.oscillate=function(){
        this.angle.add(this.velocity);
    }
    this.display=function(){
        var x=sin(this.angle.x)*this.ampitude.x;
        var y=sin(this.angle.y)*this.ampitude.y;
        var z=sin(this.angle.z)*this.ampitude.z;
        stroke(1);
        //line(0,0,0,x,y,z);
        push();
        translate(x,y,z);
        sphere(20);
        pop();
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    smooth();
    for(var i=0;i<11;i++){
        oscillatorList.push(new Oscillator(random(-0.1,0.1),random(-0.1,0.1),random(-0.1,0.1),random(-300,300),random(-300,300),random(-300,300)));
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){

    rotateX(rtx);
    rotateY(rty);
    rotateZ(rtz);
    background(249,1)
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