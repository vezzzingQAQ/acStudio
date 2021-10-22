var functions=[



{
name:"静态-基本三角函数1",
ifunction:`
sin(x*y/1000);
//除以1000后相当于-0.3,0.3
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(255,z*100+100,map(x,-300,300,0,255));
rect(x,y,z*20);  
//程序默认的x,y循环范围是-300,300 
`
},



{
name:"静态-像素化",
ifunction:`
sin(x*y/1000);
`,
cfunction:`
fill(0,z*100+100,map(x,-300,300,0,255));
noStroke();
rect(x,y,10);  
//程序默认的x,y循环范围是-300,300 
`
},



{
name:"静态-字符串输出2",
ifunction:`
sin(x*y/1000);
`,
cfunction:`
fill(y,x,map(z,-1,1,0,255),100);
noStroke();
text("vezzzingqaqyyds",x,y);  
`
},
    


{
name:"动态-frameCount函参1",
ifunction:`
sin(x*y/3000+frameCount/20);
`,
cfunction:`
noStroke();
fill(255,z*100+100,map(x,-300,300,0,255));
circle(x,y,z*10);  
//程序默认的x,y循环范围是-300,300 `
},



{
name:"动态-frameCount函参2",
ifunction:`
sin(x*y+cos(x*y)-frameCount/10);
`,
cfunction:`
stroke(z*100+100);
strokeWeight(z*3);
noFill();
circle(x*1.5,y*1.5,z*12);  
`
},
    


{
name:"动态-frameCount函参3",
ifunction:`
sin(x*y*3+frameCount/20);
`,
cfunction:`
noFill();
stroke(255,x,y);
strokeWeight(z);
if(z>0.5)
{
rect(x*2.3,y*2.3,18)
}else
{
circle(x*2.3,y*2.3,z*23);
}
`
},



{
name:"动态-frameCount函参4",
ifunction:`
sin(x*y/1000-frameCount/10);
//除以1000后相当于-0.3,0.3
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(255,z*100+100,map(x,-300,300,0,255));
rect(x,y,z*20);  
//程序默认的x,y循环范围是-300,300 
`
},



{
name:"动态-frameCount函参5",
ifunction:`
(x+y)/100-sin(frameCount/20)*10
`,
cfunction:`
noStroke();
fill(111,z*100+100,map(x,-300,300,0,255));
rect(x/3,y/3,z);
`
},
    

{
name:"动态-if语句",
ifunction:`
if(sqrt(x*x+y*y)<300){
sin(sqrt(x*x+y*y)/50-frameCount/10)
}
`,
cfunction:`
noFill();
stroke(map(z,-1,1,0,255));
strokeWeight(z);
circle(x,y,z*10);
`},
    


{
name:"动态-非常规对应1",
ifunction:`
sin(x+y/3000+frameCount/100);
`,
cfunction:`
noFill();
strokeWeight(map(z,-1,1,0,0.5));
stroke(map(y,-300,300,0,255),z*100+100,map(x,-300,300,0,255));
rect(sin(x+z)*300*z,sin(y+z)*300*z,z*20);  
//程序默认的x,y循环范围是-300,300 
`
},



{
name:"动态-非常规对应2",
ifunction:`
(x+y)/100-sin(frameCount/20)*10
`,
cfunction:`
noStroke();
fill(211,z*100+100,map(x,-300,300,0,255));
rect(sin(x)*z*10,cos(x)*z*10,z);
`
},



{
name:"动态-非常规对应3",
ifunction:`
(x+y)/100-sin(frameCount/20)*10
`,
cfunction:`
noStroke();
fill(z*100+100,111,map(x,-300,300,0,255));
circle(sin(z)*z*10,cos(z)*z*10,z);
`
},
   


{
name:"动态-非常规对应4",
ifunction:`
(x)/100-sin(frameCount/20)*10
`,
cfunction:`
noStroke();
fill(map(x,-300,300,0,255),211,z*100+100);
rect(sin(x)*z*20,cos(x)*z*20,z*3);
`
},
    
    

{
name:"动态-字符串输出1",
ifunction:`
sin(x*y/1000+cos(x+y)+sin(frameCount/20)*5);
`,
cfunction:`
fill(map(z,-1,1,0,255),x,y);
noStroke();
textSize(z*30);
text(abs(int(z*9)),x*2.3,y*2.3); 
`
},



{
name:"动态-字符串输出2",
ifunction:`
sin(x+x*y+(x && y)+random()+frameCount/10);
`,
cfunction:`
fill(map(z,-1,1,0,255),222,y);
noStroke();
textSize(z*10);
text(abs(int(z*9)),x*2.3,y*1.8); 
`
},


    
{
name:"动态-连线1",
ifunction:`
sin(x*y/1000+cos(x+y/10-frameCount/10));
`,
cfunction:`
stroke(map(x,-300,300,0,255),50,z*100+100);
strokeWeight(z*10)
line(x-z*10,y,x,y);  
`
},    
       
    
{
name:"动态-摩尔纹干涉1",
ifunction:`
var b1=sqrt((x)*(x)+(y)*(y));
sin(b1-frameCount/10);
`,
cfunction:`
noFill();
strokeWeight(z*3);
stroke(255-map(z,-1,1,0,255),map(z,-1,1,0,255),map(z,-1,1,0,255));
rect(x+random(-1,1),y+random(-1,1),z*10);
`
},    
    
    
    
{
name:"交互-鼠标交互1",
ifunction:`
sin(x*y+mouseX/200);
`,
cfunction:`
fill(
map(mouseX,0,width,0,255),
map(mouseY,0,height,0,255),
z*120+120,50);

noStroke();
rect(x,y,z*20);  
`
},
 


{
name:"交互-鼠标跟随",
ifunction:`
var ex=map(mouseX,0,width,300,-300);
var ey=map(mouseY,0,height,300,-300);
var b1=sqrt((x+ex)*(x+ex)+(y+ey)*(y+ey))/30;
sin(b1-frameCount/10);
`,
cfunction:`
noStroke();
fill(map(z,-1,1,0,255),map(y,-300,300,0,255),map(x,-300,300,255,0));
rect(x+random(-1,1),y+random(-1,1),z*10);
`
},
    
]
