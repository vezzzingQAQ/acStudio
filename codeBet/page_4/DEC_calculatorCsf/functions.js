var functions=[
{
name:"静态-环-1",
ixfunction:`
13*cos(o*6.28*50)-8*cos((5/8)*(o*6.28*5))*30
`,
iyfunction:`
13*sin(o*6.28*50)-8*sin((5/8)*(o*6.28*5))*30
`,
cfunction:`
noFill();
strokeWeight(0.4);
stroke(map(x,-130,130,0,255),map(y,-130,130,255,0),map(o,-30,30,0,255));
line(x,y,px,py);
`
},
        


{
name:"动态-丽萨茹曲线-1",
ixfunction:`
sin(2*o+T/3)*170;
`,
iyfunction:`
cos(3*o)*170;
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(255,0,map(x,-170,170,0,255));
line(x,y,px,py);
`
},


{
name:"动态-丽萨茹曲线-2",
ixfunction:`
sin(o)*170;
`,
iyfunction:`
cos(2*o+T/3)*170;
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(map(x,-100,100,255,0),map(o,-30,30,255,0),map(y,-100,100,0,255));
rect(x,y,sqrt(x*x+y*y)/10);
`
},



{
name:"动态-丽萨茹曲线-3",
ixfunction:`
13*cos(o*6.28*50)-8*cos((T/8)+(o*6.28*3))*30
`,
iyfunction:`
13*sin(o*6.28*50)-8*sin((T/8)+(o*6.28*5))*30
`,
cfunction:`
noFill();
strokeWeight(o/100);
stroke(255,map(y,-130,130,255,0),map(o,-30,30,0,255));
line(x,y,px,py);
`
},
    


{
name:"动态-随便-1",
ixfunction:`
sin(cos(o)+T/3)*170
`,
iyfunction:`
cos(sin(o)+T)*170
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(255,120,map(o,-30,30,0,255));
line(x,y,px,py);
`
},



{
name:"动态-螺线变形-1",
ixfunction:`
o*cos(o+T/10)*10
`,
iyfunction:`
o*sin(2*o+T)*10
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(map(x,-100,100,0,255),110,map(o,-30,30,0,255));
line(x,y,px,py);
`
},
    
{
name:"一元函数-三角函数",
ixfunction:`
o*33
`,
iyfunction:`
cos(o+T)*200;
`,
cfunction:`
noFill();
strokeWeight(1);
stroke(155,100);
line(o*633,-1000,o*633,1000);
line(-1000,o*633,1000,o*633);
stroke(map(x,-100,100,0,255),map(o,-230,30,0,255),map(y,-200,200,0,255));
line(x,y,px,py);
`
},
]