var functions=[



{
name:"静态-基本三角函数1",
preload:`
background(0);
drawAxis();
drawMouseFPoint(drawText=true,drawLine=true,drawDt=true);
`,
ifunction:`
sin(x);
`,
cfunction:`
drawFunction();
`
},

{
name:"静态-手动绘制导数1",
preload:`
background(0);
drawAxis();
drawMouseFPoint(drawText=true,drawLine=false,drawDt=false);
`,
ifunction:`
sin(x);
`,
cfunction:`
drawFunction();
fill(255,255,0);
noStroke();
rect(x,pk,0.03);
`
},
    

{
name:"静态-手动绘制导数2",
preload:`
background(0,50);
noStroke();
fill(200,200,10);
circle(mx,fk(mx),0.05);
`,
ifunction:`
sin(cos(x));
`,
cfunction:`
drawFunction();
`
},
    

{
name:"静态-切线拟合",
preload:`
background(0);
drawAxis();
let deltaX=1;
vLine(mx,0,mx,f(mx),showPosition=false,showK=false);
vLine(mx+deltaX,0,mx+deltaX,f(mx+deltaX),showPosition=false,showK=false);
vLine(mx,f(mx),mx+deltaX,f(mx+deltaX));
`,
ifunction:`
3*cos(x/2);
`,
cfunction:`
drawFunction();
`
},
    
]
