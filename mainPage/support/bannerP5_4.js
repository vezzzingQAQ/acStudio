var rtx=0;
var rty=0;
var rtz=0;
var sizer=200;
var wordT=0;

function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    translate(width/2,height/2-80,0);
    background(0);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    rtx+=0.005;
    rty+=0.005;
    rtz+=0.005;
    //lights();
    pointLight(255,255,180,100,100,100);
    rotateX(rtx);
    rotateY(rty);
    rotateZ(rtz);
    background(0);

    var index=0;
    var r=300;
    wordT+=0.005;
    for(i=0;i<2*PI;i+=2*PI/400){
        rotateX(i)//天女撒花版;
        push();
        //rotateX(i)//无限螺旋板;
        textSize(50);
        //rectMode(SHAPE);
        rotateY(wordT);
        noStroke();
        fill(sin(wordT*10+index)*120+120,sin(wordT*30+index)*120+120,sin(wordT*20+index)*120+120,200);
        push();
        translate(sin(i+wordT)*r,0,cos(i+wordT)*r);
        box(10);
        pop();
        pop();
        index+=1;
    }
}
