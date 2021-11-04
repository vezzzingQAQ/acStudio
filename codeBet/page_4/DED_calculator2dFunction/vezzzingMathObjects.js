const ts=0.15;
class VPoint{
    constructor(x,y,r=0.1) {
        this.x=x;
        this.y=y;
        this.r=r;
    }
    // Override the display method
    display() {
        noStroke();
        fill(255,255,0);
        circle(this.x,this.y,this.r);
    }
    showPosition(){
        let tag="("+round(this.x,2)+","+round(this.y,2)+")";
        textSize(ts);
        fill(255,200);
        noStroke();
        push();
            translate(this.x,this.y);
            rotate(PI);
            text(tag,-textWidth(tag)/2,-0.3);
        pop();
    }
}
class VLine{
    constructor(x1,y1,x2,y2,weight=0.03) {
        this.p1=new VPoint(x1,y1,0.1);
        this.p2=new VPoint(x2,y2,0.1);
        this.weight=weight;
        this.dx=this.p2.x-this.p1.x;
        this.dy=this.p2.y-this.p1.y;
        this.k=this.dy/this.dx;
        this.centerPoint=new VPoint((this.p1.x+this.p2.x)/2,(this.p1.y+this.p2.y)/2);
    }
    display(drawPoints=false){
        noFill();
        stroke(255,200);
        strokeWeight(this.weight);
        line(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
        if(drawPoints){
            this.p1.display();
            this.p2.display();
        }
    }
    showPosition(){
        this.p1.display();
        this.p1.showPosition();
        this.p2.display();
        this.p2.showPosition();
    }
    showK(){
        let tag="k="+round(this.k,2);
        textSize(ts);
        fill(255,200);
        noStroke();
        push();
            translate(this.centerPoint.x,this.centerPoint.y);
            rotate(PI);
            text(tag,-textWidth(tag)/2,-0.3);
        pop();
    }
}
function vPoint(x,y,r,showPosition=true) {
    var point=new VPoint(x,y,r);
    if(showPosition){
        point.showPosition();
    }
    point.display();
}
function vLine(x1,y1,x2,y2,showPosition=true,showK=true) {
    var line=new VLine(x1,y1,x2,y2);
    if(showPosition){
        line.showPosition();
    }
    if(showK){
        line.showK();
    }
    line.display();
}
