var T=0;
var vCanvas;
var width=window.innerWidth;
var height=window.innerHeight;
function map(para,from1,from2,to1,to2){
    return((para-from1)*(to2-to1)/(from2-from1)+to1);
}
class VCanvas{
    constructor(){
        document.querySelector("body").innerHTML+="<div class='vCanvas'></div>"
    }
    run(){
        T++;
    }
}
function setup(f){
    vCanvas=new VCanvas;
    f();
}
function draw(f){
    setInterval(function(){
        vCanvas.run();
        f();
    },20);
}
class VText{
    constructor(word,left,top,width,height,id,style){
        this.x=left;
        this.y=top;
        this.w=width;
        this.h=height;
        this.str=word;
        this.id=`v${id}`;
        this.addedStyle=style;
        document.querySelector(".vCanvas").innerHTML+=`<span class="vSpan" id="${this.id}" style="
            left:${this.x}px;
            top:${this.y}px;
            width:${this.w}px;
            height:${this.h}px;
            transform:scaleX(1);
            font-size:${Math.max(this.w,this.h)}px;
            line-height:${this.h}px;
            ${this.addedStyle}
        ">${this.str}</span>`
    }
    scaleX(f){
        this.w=f();
        this._scaleXY();
    }
    scaleY(f){
        this.h=f();
        this._scaleXY();
    }
    _scaleXY(){
        document.querySelector(`#${this.id}`).style.transform=`scaleX(${this.w}) scaleY(${this.h})`;
    }
}
window.onresize=function(){
    var width=window.innerWidth;
    var height=window.innerHeight;
}