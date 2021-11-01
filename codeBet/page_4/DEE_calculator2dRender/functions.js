var functions=[



{
name:"基本三角函数1",
ifunction:`
sin(x*y/100000);
`,
cfunction:`
noFill();
strokeWeight(z);
stroke(255,z*100+100,map(x,-300,300,0,255));
rect(x,y,z);  
//程序默认的x,y循环范围是-300,300 
`
},


{
name:"摩尔纹干涉1-肥皂泡",
ifunction:`
sin(sqrt(x*x+y*y)/50);
`,
cfunction:`
noFill();
strokeWeight(z);
stroke(map(sin(z*1122),-1,1,0,255),map(sin(z*1123),-1,1,0,255),map(sin(z*1124),-1,1,0,255));
rect(x,y,z*10);  
`
},


{
name:"摩尔纹干涉2-涟漪",
ifunction:`
sin(X*cos(X+Y)+sin(X*X+Y*Y))
`,
cfunction:`
noStroke();
fill(120+120*z,abs(z*250),120+120*sin(525*z));
rect(x,y,5);  
`
},
    

{
name:"摩尔纹干涉3-波斯地毯1",
ifunction:`
sin(x/10)*cos(y/10)
`,
cfunction:`
noStroke();
fill(map(sin(z),-1,1,0,255),map(sin(z*125),-1,1,0,255),map(sin(z*126),-1,1,0,255));
rect(x,y,5);  
`
},

    

{
name:"多普勒效应1",
ifunction:`
sin(sqrt(X*x+Y*y)+T);
`,
cfunction:`
noFill();
strokeWeight(z/10);
stroke(map(x,0,width,255,0),map(y,0,height,0,255),map(z,-1,1,0,255),10);
circle(x,y,z*100);
`
},


{
name:"逻辑函数-芯片",
ifunction:`
sin(x&y)
`,
cfunction:`
noStroke();
fill(map(sin(z*225),-1,1,0,255),map(sin(z*125),-1,1,0,255),200);
rect(x,y,5);  
`
},
    
    
]