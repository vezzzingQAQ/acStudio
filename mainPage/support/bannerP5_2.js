var movers=[];
var slocation=null;
var svelocity=null;
function Mover(){
    this.position=createVector(random(0,width),random(0,height));
    this.velocity=createVector(3,3);
    this.r=(random(0,255));
    this.g=(random(125,255));
    this.b=(random(125,255));

    //this.acceleration=createVector(0,0);
    this.update=function(){
        this.acceleration=createVector(mouseX-this.position.x,mouseY-this.position.y)
        this.acceleration.mult(0.001*random(0.5,3));
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
        //stroke(0);
        fill(this.velocity.mag()*12,this.g,this.b);
        circle(this.position.x,this.position.y,6);
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    for(var i=0;i<100;i++){
        movers.push(new Mover)
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(235);         
    for(var i=0;i<movers.length;i++){
        movers[i].update();
        movers[i].checkEdges();
        movers[i].display();
    }
}
