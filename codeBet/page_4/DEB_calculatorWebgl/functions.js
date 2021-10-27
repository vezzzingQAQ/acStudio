var functions=[



{
name:"静态-基本三角函数1",
ifunction:`
sin(x*y/1000);
//除以1000后相当于-0.3,0.3
`,
cfunction:`
noStroke();
fill(255,z*100+100,map(x,-300,300,0,255));
push();
translate(x,y,z*30);
box(10);
pop();
`
},    


{
name:"静态-逻辑1",
ifunction:`
x&y
`,
cfunction:`
fill(map(y,-300,300,0,255),sin(z/100)*100+100,map(x,-300,300,0,255));
noStroke();
push();
translate(x,y,z);
box(10);
pop();
`
},    

    

{
name:"动态-frameCount函参1",
ifunction:`
sin(x*y/1000-T);
`,
cfunction:`
noStroke();
fill(map(z,-1,1,0,255),map(y,-150,150,0,255),map(x,-150,150,0,255));
//x,y从-150循环到150
push();
translate(x,y,z*10);
box(10,10,20);
pop();
`
},



    
{
name:"动态-frameCount函参3",
ifunction:`
sin((x+y)/50-T);
`,
cfunction:`
noStroke();
fill(map(z,1,-1,245,10));
//x,y从-150循环到150
push();
translate(x,y,z*10);
box(10,10,10);
pop();
`
},     


{
name:"动态-非常规对应1",
ifunction:`
sin(x*y/10000-T)
`,
cfunction:`
noStroke();
fill(map(x,-150,150,255,0),map(z,-1,1,-200,200),map(y,-150,150,255,0),200);
push();
rotateX(z);
rotateZ(T/3);
rotateY(-T/3);
translate(x,y,0);
box(z*5);
pop();
`
},



{
name:"动态-非常规对应2",
ifunction:`
sin(x*y/10000-T)
`,
cfunction:`
noStroke();
fill(map(x,-150,150,255,0),map(sin(z*1.2),-1,1,255,0),map(y,-150,150,255,0),200);
push();
rotateX(z);
rotateY(y)
translate(x,y,0);
box(z*15);
pop();
`
},
    


{
name:"动态-非常规对应3",
ifunction:`
sin((x+y)/50-T)
`,
cfunction:`
noStroke();
fill(map(x,-150,150,255,0),map(sin(z*1.2),-1,1,0,250),map(y,-150,150,255,0),200);
push();
rotateX(z);
rotateY(y)
translate(x*2,y*1.1,0);
rotateX(z)
box(z*15);
pop();
`
},
   


{
name:"动态-非常规对应4",
ifunction:`
(x-sin(T)*20)*(y+sin(T)*19)/220
`,
cfunction:`
fill(map(x,-300,300,0,255),map(y,-300,300,0,255),map(sin(frameCount/30),-1,1,0,255));
noStroke();
push();
rotateX(z/10)
translate(x,y,z);
box(10);
pop();
`
},
    


]
