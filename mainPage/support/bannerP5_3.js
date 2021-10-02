function calculatePosition(ampitude,period){
    //振幅,周期【帧数】
    var x=ampitude*cos(2*PI*frameCount/period);
    return(x);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    smooth();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(0,15)
    translate(width/2,height/2);
    stroke(sin(frameCount)*120+120,cos(frameCount/2)*120+120,sin(frameCount*3)*120+120);
    line(0,0,calculatePosition(200,120),calculatePosition(200,340));
}
