class Particle extends VerletParticle2D {
    constructor(position) {
        super(position);
    }
    // Override the display method
    display() {
        noFill();
        stroke(200);
        strokeWeight(2);
        ellipse(this.x, this.y, 32, 32);
    }
}
class Spring extends VerletSpring2D{
    constructor(p1,p2,len,pr1){
        super(p1,p2,len,pr1);
    }
    display(){
        stroke(200);
        strokeWeight(2);
        line(p1.x, p1.y, p2.x, p2.y);
    }
}
class Chain {
    constructor(sx,sy,ex,ey,l, n, r, s) {
        this.particles = [];
    
        this.totalLength = l; // How long
        this.numPoints = n; // How many points
        this.radius = r; // Radius of ball at tail
        this.strength = s; // Strength of the springs

        this.sx=sx;
        this.sy=sy;
        this.ex=ex;
        this.ey=ey;
    
        let len = this.totalLength / this.numPoints;
    
        //添加粒子点
        for (let i = 0; i < this.numPoints; i++) {
            let particle = new Particle(new Vec2D(map(i,0,this.numPoints,this.sx,this.ex),map(i,0,this.numPoints,this.sy,this.ey)));
            //将粒子放到physics世界和自己的列表
            physics.addParticle(particle);
            this.particles.push(particle);
    
            //用弹簧连接粒子
            if (i != 0) {
                let previous = this.particles[i - 1];
                let spring = new VerletSpring2D(particle, previous, len, this.strength);

                physics.addSpring(spring);
            }
        }
  
        //锁定头部
        let head = this.particles[0];
        head.lock();
    
        //便于访问链条的尾部
        //创建单独的属性
        this.tail = this.particles[this.numPoints - 1];
        this.tail.radius = this.radius;
    
        //鼠标拖动
        this.offset = createVector();
        this.dragged = false;
    }
  
    //检查一个粒子是否位于尾部,如果是的话就可以拖动
    //鼠标拖动尾部
    contains(x, y) {
        let d = dist(x, y, this.tail.x, this.tail.y);
        if (d < this.radius) {
            this.offset.x = this.tail.x - x;
            this.offset.y = this.tail.y - y;
            this.tail.lock();
            this.dragged = true;
        }
    }
  
    //释放尾部
    release() {
        this.tail.unlock();
        this.dragged = false;
    }
  
    //在拖动时更新位置
    updateTail(x, y) {
        if (this.dragged) {
            this.tail.set(x + this.offset.x, y + this.offset.y);
        }
    }
  
    display() {
        beginShape();
            stroke(200);
            strokeWeight(2);
            noFill();
            for (let i = 0; i < this.particles.length; i++) {
                vertex(this.particles[i].x, this.particles[i].y);
            }
        endShape();
        this.tail.display();
    }
}
class Node extends VerletParticle2D {
    constructor(pos) {
        super(pos);
    }
  
    // Override the display method
    display() {
        fill(127,140);
        stroke(200);
        strokeWeight(2);
        ellipse(this.x, this.y, 16, 16);
    }
}
class Cluster {
    constructor(n, d, center) {
  
        this.nodes = [];
        this.diameter = d;
    
        for (let i = 0; i < n; i++) {
            // We can't put them right on top of each other
            this.nodes.push(new Node(center.add(Vec2D.randomVector())));
        }
    
        // Connect all the nodes with a Spring
        for (let i = 0; i < this.nodes.length - 1; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                // A Spring needs two particles, a resting length, and a strength
                physics.addSpring(new VerletSpring2D(this.nodes[i], this.nodes[j], this.diameter, 0.01));
            }
        }
    }
  
  
    display() {
        // Show all the nodes
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].display();
        }
    }
  
    // Draw all the internal connections
    showConnections() {
        stroke(255, 150);
        strokeWeight(2);
        for (let i = 0; i < this.nodes.length - 1; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                line(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
            }
        }
    }
}
