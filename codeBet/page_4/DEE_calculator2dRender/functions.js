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
sin(x*y/3000+T);
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
sin(x*y+cos(x*y)-T*2);
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
sin(x*y*3+T);
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
sin(x*y/1000-T*2);
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
(x+y)/100-sin(T)*10
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
sin(sqrt(x*x+y*y)/50-T*2)
}
`,
cfunction:`
noFill();
stroke(map(z,-1,1,0,255));
strokeWeight(z);
circle(x,y,z*10);
`},



{
name:"动态-RGB色域",
ifunction:`
1
`,
cfunction:`
fill(map(x,-300,300,0,255),map(y,-300,300,0,255),map(sin(T),-1,1,0,255));
noStroke();
rect(x,y,11);
`},
     


{
name:"动态-非常规对应1",
ifunction:`
sin(x+y/3000+T/5);
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
(x+y)/100-sin(T)*10
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
(x+y)/100-sin(T)*10
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
(x)/100-sin(T)*10
`,
cfunction:`
noStroke();
fill(map(x,-300,300,0,255),211,z*100+100);
circle(sin(x)*z*20,cos(x)*z*20,z*3);
`
},
    


{
name:"动态-非应5-伪3D",
ifunction:`
(sin(T)*20*x+y)/100
`,
cfunction:`
noStroke();
fill(map(y,-300,300,0,255),map(z,-1,1,0,255),map(x,-300,300,0,255));
rect(sin(x)*z*5,cos(x)*z*5,z);
`
},



{
name:"动态-非常规对应6",
ifunction:`
(sin(T)*20*x+cos(T)*20*y)/100
`,
cfunction:`
noFill();
strokeWeight(z/10)
stroke(map(x,-300,300,0,255),255-map(x,-300,300,0,255),map(y,-300,300,255,0));
rect(sin(x)*z*2,cos(x)*z*2,z);
`
},
    
    
    
{
name:"动态-非常规对应7",
ifunction:`
sin(x*y/10000-(T/5))
`,
cfunction:`
noStroke();
fill(250,map(x,-300,300,255,0),map(y,-300,300,255,0));
circle(sin(z)*x,cos(z)*y,z*5);
`
},




{
name:"动态-非应8-软体动物1",
ifunction:`
sin(x/90+T/3)+cos(y/90-T/1.5)
`,
cfunction:`
noStroke();
fill(map(sin(T),-1,1,0,255),map(x,-300,300,255,0),map(y,-300,300,255,0),10);
rect(sin(z)*x,cos(z)*y,50);
`
},
    


{
name:"动态-非应8-软体动物2",
ifunction:`
sin(x/90+T/3+cos(y/90-T/1.5))
`,
cfunction:`
noStroke();
fill(map(x,-300,300,255,0),map(sin(T),-1,1,0,255),map(y,-300,300,255,0));
rect(sin(z)*x,cos(z)*y,z*5);
`
},
    



{
name:"动态-非应9-软体动物3",
ifunction:`
sin((x+y)/100-(T/2.5))
`,
cfunction:`
noStroke();
fill(sin(x/10)*120+120,110,sin(y/10)*120+120);
rect(sin(z+x)*y,cos(z+x)*x,z*5,10);
`
},
    


{
name:"动态-非应10-软体动物4",
ifunction:`
sin((x+y)/100-(T/2.5))
`,
cfunction:`
noStroke();
fill(sin(x/10)*120+120,0,sin(y/10)*120+120);
rect(sin(z)*y,cos(z)*x,z*5,10);
`
},
    


{
name:"动态-非应11-软体动物5",
ifunction:`
sin(x/100-T/2)+cos(y/100+T/5)
`,
cfunction:`
noStroke();
fill(map(x,-300,300,0,255),map(y,-300,300,0,255),map(z,-1,1,0,255));
rect(sin(z)*y,cos(z)*x,z*5);
`
},



{
name:"动态-非应12-旗帜",
ifunction:`
sin((sin(x/100-T*2)+cos(y/100+T*2))/10-202)
`,
cfunction:`
noStroke();
fill(sin(x/10+y/10)*120+120);
rect(sin(z)*y,cos(z)*x,z*5);
`
},




{
name:"动态-非应13-大螺旋",
ifunction:`
(x+y)*0.1/cos(T/7)-sin(T/5)*10
`,
cfunction:`
noFill();
strokeWeight(z/10)
stroke(z*100+100,map(y,300,-300,0,255),map(x,-300,300,0,255));
rect(sin(x+z/10)*z*10,cos(x+z/10)*z*10,z);
`
},
        
{
name:"动态-字符串输出1",
ifunction:`
sin(x*y/1000+cos(x+y)+sin(T)*5);
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
sin(sqrt(x*x+y*y)/2-T/1.5);
`,
cfunction:`
fill(255,map(z,-1,1,0,255),252);
noStroke();
textSize(z*10);
text(abs(int(z*9)),x*1.1,y*1.1); 
`
},



{
name:"动态-字符串输出3",
ifunction:`
sin(x*y/1000+cos(x+y)+sin(T)*5);
`,
cfunction:`
fill(0,252,y);
noStroke();
textSize(z*10);
var textTemp="ㄅㄈㄋㄎㄑㄔㄒㄌㄍㄓㄖㄜあㄠㄣㄦㄤㄡㄞぃぅうげさじせぞだどぬはひふぶめまァオキ」コザスタ";
text(textTemp[int(random(0,textTemp.length))],x*2.3+random(2),y*1.8)+random(2);
`
},


    
{
name:"动态-连线1",
ifunction:`
sin(x*y/1000+cos(x+y/10-T*2));
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
sin(sqrt((x)*(x)+(y)*(y))-T);
`,
cfunction:`
noFill();
strokeWeight(z*3);
stroke(255-map(z,-1,1,0,255),map(z,-1,1,0,255),map(z,-1,1,0,255));
rect(x+random(-1,1),y+random(-1,1),z*10);
`
},    
   


{
name:"动态-摩尔纹干涉2",
ifunction:`
sin(sqrt(x*x+y*y)/20-T/2.5);
`,
cfunction:`
noFill();
strokeWeight(z*2);
stroke(sin(z*20)*120+120,sin(z*21)*120+120,sin(z*22)*120+120);
rect(x,y,10); 
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
rect(x+random(2),y+random(2),z*20);
`
},
 


{
name:"交互-鼠标交互2-非应",
ifunction:`
(x*map(mouseX,0,width,-2,2)+y*map(mouseY,0,height,-2,2))/100
`,
cfunction:`
noStroke();
fill(220,map(x,-300,300,255,0),map(y,-300,300,255,0));
rect(sin(z)*x,cos(z)*y,z);
`
},
    


{
name:"交互-鼠标跟随",
ifunction:`
sin(sqrt((x+map(mouseX,0,width,300,-300))*(x+map(mouseX,0,width,300,-300))+(y+map(mouseY,0,height,300,-300))*(y+map(mouseY,0,height,300,-300)))/30-T*2);
`,
cfunction:`
noStroke();
fill(map(z,-1,1,0,255),map(y,-300,300,0,255),map(x,-300,300,255,0));
rect(x+random(-1,1),y+random(-1,1),z*10);
`
},
    
]
