class Node extends VerletParticle2D{
    constructor(position,r=32) {
        super(position);
        this.radius=r;
        this.isMoving=true;
    }
    checkIn(x,y){
        if(dist(this.x,this.y,x,y)<=this.radius){
            return(true);
        }else{
            return(false);
        }
    }
}
class DynamicNode extends Node {
    constructor(position,r) {
        super(position,r);
    }
    // Override the display method
    display() {
        if(this.isMoving==false){
            noFill();
            if(this.checkIn(mouseX,mouseY)){
                stroke(0,250,0);
            }else{
                stroke(200);
            }
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }else{
            stroke(100);
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }
    }
    move(x,y){
        if(this.isMoving==false){
            this.lock();
            this.x = x;
            this.y = y;
            this.unlock();
        }
    }
}
class MoveXNode extends Node {
    constructor(position,r) {
        super(position,r);
    }
    // Override the display method
    display() {
        if(this.isMoving==false){
            console.log(this.constraints);
            noFill();
            if(this.checkIn(mouseX,mouseY)){
                stroke(0,250,0);
            }else{
                stroke(200);
            }
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
            stroke(100);
            line(this.x-10000,this.y,this.x+10000,this.y);
        }else{
            stroke(100);
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }
    }
    addCs(x,y){
        this.addConstraint(new toxi.physics2d.constraints.AxisConstraint(Vec2D.Axis.Y,y));
    }
    move(x,y){
        if(this.isMoving==false){
            this.lock();
            this.x = x;
            this.unlock();
        }
    }
}

class MoveYNode extends Node {
    constructor(position,r) {
        super(position,r);
    }
    // Override the display method
    display() {
        if(this.isMoving==false){
            console.log(this.constraints);
            noFill();
            if(this.checkIn(mouseX,mouseY)){
                stroke(0,250,0);
            }else{
                stroke(200);
            }
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
            stroke(100);
            line(this.x,this.y-10000,this.x,this.y+10000);
        }else{
            stroke(100);
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }
    }
    addCs(x,y){
        this.addConstraint(new toxi.physics2d.constraints.AxisConstraint(Vec2D.Axis.X,x));
    }
    move(x,y){
        if(this.isMoving==false){
            this.lock();
            this.y = y;
            this.unlock();
        }
    }
}


class DrawingNode extends Node {
    constructor(position,r) {
        super(position,r);
        this.pointsList=[];
    }
    // Override the display method
    display() {
        if(this.isMoving==false){
            noFill();
            this.drawPath();
            if(this.checkIn(mouseX,mouseY)){
                stroke(0,250,0);
            }else{
                stroke(210,110,250);
            }
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }else{
            stroke(100);
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }
    }
    move(x,y){
        if(this.isMoving==false){
            this.lock();
            this.x = x;
            this.y = y;
            this.unlock();
        }
    }
    drawPath(){
        this.pointsList.push(new Point(this.x,this.y));
        stroke(255);
        beginShape();
            for(var i=0;i<this.pointsList.length;i++){
                vertex(this.pointsList[i].x,this.pointsList[i].y);
            }
        endShape();
    }
}

class StaticNode extends Node {
    constructor(position,r) {
        super(position,r);
        this.isStatic=true;
        this.lock();
    }
    // Override the display method
    display() {
        if(this.isMoving==false){
            noFill();
            stroke(250,0,0);
            strokeWeight(1);
            ellipse(this.x, this.y, 32, 32);
        }else{
            stroke(100);
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius, this.radius);
        }
    }
    move(x,y){

    }
}

class Spring extends VerletSpring2D{
    constructor(p1,p2,len,pr1){
        super(p1,p2,len,pr1);
        this.p1=p1;
        this.p2=p2;
        this.len=len;
        this.pr1=pr1;
    }
    display(){
        stroke(200);
        strokeWeight(1);
        line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
}

class DrawingSpring extends VerletSpring2D{
    constructor(p1,p2,len,pr1){
        super(p1,p2,len,pr1);
        this.p1=p1;
        this.p2=p2;
        this.len=len;
        this.pr1=pr1;
        this.lines=[];
    }
    display(){
        this.drawPath();
        stroke(210,10,250);
        strokeWeight(1);
        line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
    drawPath(){
        this.lines.push(new Line(this.p1.x,this.p1.y,this.p2.x,this.p2.y));
        for(var i=0;i<this.lines.length;i++){
            this.lines[i].display();
        }
    }
}

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
class Line{
    constructor(x1,y1,x2,y2){
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;
    }
    display(){
        noFill();
        stroke(200,100);
        strokeWeight(0.5);
        line(this.x1,this.y1,this.x2,this.y2);
    }
}