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
rectMode=CENTER;
rect(x,y,10);  
//程序默认的x,y循环范围是-300,300 
`
},



{
name:"动态-frameCount函参",
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
name:"动态-非常规对应",
ifunction:`
sin(x*y/3000+frameCount/100);
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
rectMode=CENTER
rect(x,y,z*20);  
`
},
    
]
