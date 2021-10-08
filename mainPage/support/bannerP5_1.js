var movers=[];
var slocation=null;
var svelocity=null;
function Mover(){
    this.position=createVector(random(0,width),random(0,height));
    this.velocity=createVector(3,3);
    this.r=(random(0,255));
    this.g=(random(0,255));
    this.b=(random(0,255));
    this.life=400;

    //this.acceleration=createVector(0,0);
    this.update=function(){
        this.acceleration=createVector(width/2-this.position.x,height/2-this.position.y)
        this.acceleration.mult(0.0001*random(0.5,3));
        this.velocity.add(this.acceleration);
        this.velocity.limit(2);
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
        fill(this.g,this.velocity.mag()*12,this.b,map(this.life,0,400,0,255));
        circle(this.position.x,this.position.y,3);
        this.life--;
    }
    this.checkDeath=function(){
        if(this.life<0){
            return true;
        }else{
            return false;
        }
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    for(var i=0;i<2;i++){
        movers.push(new Mover)
    }
    for(var i=0;i<movers.length;i++){
        movers[i].update();
        movers[i].checkEdges();
        movers[i].display();
        if(movers[i].checkDeath()){
            movers.splice(i,1);
        }
    }
    background(0,30);         
}
