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
    constructor(word/*显示的字*/,left,top,width,height,addedStyle/*添加的样式*/){
        this.x=left;
        this.y=top;
        this.w=width;
        this.h=height;

        this.rotate=0;
        this.tx=0;
        this.ty=0;
        
        this.str=word;
        
        this.id=`v${Math.floor(Math.random()*10000000)}`;
        
        this.style=`
            left:${this.x}px;
            top:${this.y}px;
            width:${this.w}px;
            height:${this.h}px;
            font-size:${Math.max(this.w,this.h)}px;
            line-height:${this.h}px;
        `
        this.addedStyle=addedStyle;
        
        document.querySelector(".vCanvas").innerHTML+=`<span class="vSpan" id="${this.id}" style="
            ${this.style};
            ${this.addedStyle}
        ">${this.str}</span>`
    }
    vscaleX(f){
        this.w=f();
        this._transform();
    }
    vscaleY(f){
        this.h=f();
        this._transform();
    }
    vrotate(f){
        this.rotate=f();
        this._transform();
    }
    vtransformX(f){
        this.tx=f();
        this._transform();
    }
    vtransformY(f){
        this.ty=f();
        this._transform();
    }
    _transform(){
        document.querySelector(`#${this.id}`).style.transform=`
        scaleX(${this.w}) scaleY(${this.h}) rotate(${this.rotate}deg) translateX(${this.tx}) translateY(${this.ty})
        `;
    }
}
window.onresize=function(){
    width=window.innerWidth;
    height=window.innerHeight;
}