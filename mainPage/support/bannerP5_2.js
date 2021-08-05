var ca=null;
function init2Darray(columns,rows){
    var arrayFinal=[];
    var temp=[];
    for(var i=0;i<columns;i++){
        for(j=0;j<rows;j++){
            temp.push([]);
        }
        arrayFinal.push(temp);
        temp=[];
    }
    return arrayFinal;
}
function BasicCA2D(){
    this.board=null;
    this.next=null;
    this.columns=null;
    this.rows=null;
    this.w=null;
    this.createBoard=function(w){
        this.w=w;
        var col=int(width/w);
        var row=int(height/w);
        this.init(col,row,w);
    }
    this.init=function(columns,rows,w){
        this.w=w;
        this.board=init2Darray(columns,rows);
        this.next=init2Darray(columns,rows);
        this.columns=columns;
        this.rows=rows;
        for(var x=0;x<columns;x++){
            for(var y=0;y<rows;y++){
                this.board[x][y]=new Cell(x,y,0,this.w);
                this.next[x][y]=new Cell(x,y,0,this.w)
            }
        }
    }
    this.generate=function(){
        for(var x=1;x<this.columns-1;x++){
            for(var y=1;y<this.rows-1;y++){
                var neighbors=0;
                for(var i=-1;i<=1;i++){
                    for(var j=-1;j<=1;j++){
                        neighbors+=this.board[x+i][y+j].state;
                    }
                }
                neighbors-=this.board[x][y].state;
                if((this.board[x][y].state==1)&&(neighbors<2)){
                    this.next[x][y].state=0;
                }else if((this.board[x][y].state==1)&&(neighbors>3)){
                    this.next[x][y].state=0;
                }else if((this.board[x][y].state==0)&&(neighbors==3)){
                    this.next[x][y].state=1;
                }else{
                    this.next[x][y].state=this.board[x][y].state;
                }
            }
        }
        for(var x=1;x<this.columns-1;x++){
            for(var y=1;y<this.rows-1;y++){
                this.board[x][y].newState(this.next[x][y].state);
            }
        }
    }
    this.display=function(){
        for(var x=1;x<this.columns-1;x++){
            for(var y=1;y<this.rows-1;y++){
                this.board[x][y].display();
            }
        }
    }
}
function Cell(x,y,state,w){
    this.x=x;
    this.y=y;
    this.w=w;
    this.state=state;
    this.previous=0;
    this.preprevious=0;
    this.newState=function(state){
        this.preprevious=this.previous;
        this.previous=this.state;
        this.state=state;
    }
    this.display=function(){
        noStroke();
        if(this.preprevious==1){
            if(this.previous==1){
                if(this.state==1){
                    fill(0, 119, 182,200);
                }else{
                    fill(0, 150, 199,200);
                }
            }else{
                if(this.state==1){
                    fill(0, 180, 216,200);
                }else{
                    fill(72, 202, 228,200);
                }
            }
        }else{
            if(this.previous==1){
                if(this.state==1){
                    fill(144, 224, 239,200);
                }else{
                    fill(173, 232, 244,200);
                }
            }else{
                if(this.state==1){
                    fill(202, 240, 248,200);
                }else{
                    fill(0,0,0,0);
                }
            }
        }
        circle(this.x*this.w,this.y*this.w,this.w-1,this.w-1);
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    ca=new BasicCA2D();
    ca.createBoard(10);
}
function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}
function draw(){
    background(235);
    ca.generate();
    ca.display();
}
function mouseMoved(){
    var x=int(map(mouseX,0,width,1,ca.columns-1));
    var y=int(map(mouseY,0,height,1,ca.rows-1));
    try{
        ca.board[x][y+1].newState(1);
        ca.board[x][y-1].newState(1);
        ca.board[x+1][y].newState(1);
        ca.board[x-1][y].newState(1);
    }catch{
        text("error,2333",10,10);
    }
}
