var oscillatorList=[];
function Oscillator(velocityX,velocityY,ampitudeX,ampitudeY){
    this.angle=createVector(0,0);
    this.velocity=createVector(velocityX,velocityY);
    this.ampitude=createVector(ampitudeX,ampitudeY);
    this.colorR=random(210,255);
    this.colorG=random(210,255);
    this.colorB=random(210,255);

    this.oscillate=function(){
        this.angle.add(this.velocity);
    }
    this.display=function(){
        var x=sin(this.angle.x)*this.ampitude.x;
        var y=sin(this.angle.y)*this.ampitude.y;
        push();
        translate(width/2,height/2);
        stroke(this.colorR,this.colorB,this.colorG,20);
        line(0,0,x,y);
        pop();
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    for(var i=0;i<130;i++){
        oscillatorList.push(new Oscillator(random(-0.1,0.1),random(-0.1,0.1),random(-300,300),random(-300,300)));
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(0,35)
    for(var i=0;i<oscillatorList.length;i++){
        oscillatorList[i].oscillate();
        oscillatorList[i].display();
    }
}
