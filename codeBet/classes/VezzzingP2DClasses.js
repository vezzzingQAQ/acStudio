class Box {
    constructor(x, y,w,h,density=1.0,friction=0.5,restitution=0.2,linearVelocity=new box2d.b2Vec2(random(-5, 5), random(2, 5)),angularVelocity=(random(-5,5)),borderColor=[200,200,200]) {
        this.w = w;
        this.h = h;
        this.borderColor=borderColor;

        //定义一个box
        let bd = new box2d.b2BodyDef();
        bd.type = box2d.b2BodyType.b2_dynamicBody;
        bd.position = scaleToWorld(x, y);

        //定义一个夹具
        let fd = new box2d.b2FixtureDef();

        //定义一个形状
        fd.shape = new box2d.b2PolygonShape();
        fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));//坐标转换

        //在夹具中设置物理参数
        fd.density = 1.0;
        fd.friction = 0.5;
        fd.restitution = 0.2;

        //创建物体
        this.body = world.CreateBody(bd);
        //绑定物体和夹具
        this.body.CreateFixture(fd);

        //额外设置
        this.body.SetLinearVelocity(linearVelocity);
        this.body.SetAngularVelocity(angularVelocity);
        
        this.body.SetUserData(this);
    }

    //删除物体
    killBody() {
        world.DestroyBody(this.body);
    }
    
    //是否删除
    done() {
        let transform = this.body.GetTransform();
        let pos = scaleToPixels(transform.position);
        if (pos.y > height + this.r * 2) {
            this.killBody();
            return true;
        }
        return false;
    }

    contains(x, y) {
        let worldPoint = scaleToWorld(x, y);
        let f = this.body.GetFixtureList();
        let inside = f.TestPoint(worldPoint);
        return inside;
    }

    changeColor(){
        this.borderColor=[255,255,0];
    }
    
    display() {
        //获取位置和角度信息
        let pos = scaleToPixels(this.body.GetPosition());
        let a = this.body.GetAngleRadians();

        rectMode(CENTER);
        push();
            translate(pos.x, pos.y);
            rotate(a);
            noFill();
            stroke(this.borderColor[0],this.borderColor[1],this.borderColor[2]);
            strokeWeight(2);
            rect(0, 0, this.w, this.h);
        pop();
    }
}   
class Circle {
    constructor(x, y, r,density=1.0,friction=0.1,restitution=0.3,linearVelocity=new box2d.b2Vec2(random(-5, 5), random(2, 5)),angularVelocity=(random(-5,5)),borderColor=[200,200,200]) {
        this.r = r;
        this.borderColor=borderColor;

        let bd = new box2d.b2BodyDef();
        bd.type = box2d.b2BodyType.b2_dynamicBody;
        bd.position = scaleToWorld(x, y);
    
        let fd = new box2d.b2FixtureDef();
        fd.shape = new box2d.b2CircleShape();
        fd.shape.m_radius = scaleToWorld(this.r);
    
        fd.density = density;
        fd.friction = friction;
        fd.restitution = restitution;
    
        this.body = world.CreateBody(bd);
        this.body.CreateFixture(fd);
    
        //额外设置
        this.body.SetLinearVelocity(linearVelocity);
        this.body.SetAngularVelocity(angularVelocity);

        this.body.SetUserData(this);
    }
  
    //删除物体
    killBody() {
        world.DestroyBody(this.body);
    }
  
    //是否删除
    done() {
        let transform = this.body.GetTransform();
        let pos = scaleToPixels(transform.position);
        if (pos.y > height + this.r * 2) {
            this.killBody();
            return true;
        }
        return false;
    }

    contains(x, y) {
        let worldPoint = scaleToWorld(x, y);
        let f = this.body.GetFixtureList();
        let inside = f.TestPoint(worldPoint);
        return inside;
    }

    changeColor(){
        this.borderColor=[255,255,0];
    }

    display() {
        let pos = scaleToPixels(this.body.GetPosition());
        let a = this.body.GetAngleRadians();

        rectMode(CENTER);
        push();
            translate(pos.x, pos.y);
            rotate(a);
            noFill();
            stroke(this.borderColor[0],this.borderColor[1],this.borderColor[2]);
            strokeWeight(2);
            ellipse(0, 0, this.r * 2, this.r * 2);
            line(0, 0, this.r, 0);
        pop();
    }
}
class CircleStatic {
    constructor(x, y, r,density=1.0,friction=0.1,restitution=0.3) {
        this.r = r;
    
        let bd = new box2d.b2BodyDef();
        bd.type = box2d.b2BodyType.b2_staticBody;
        bd.position = scaleToWorld(x, y);
    
        let fd = new box2d.b2FixtureDef();
        fd.shape = new box2d.b2CircleShape();
        fd.shape.m_radius = scaleToWorld(this.r);
    
        fd.density = density;
        fd.friction = friction;
        fd.restitution = restitution;
    
        this.body = world.CreateBody(bd);
        this.body.CreateFixture(fd);
    }
  
    //删除物体
    killBody() {
        world.DestroyBody(this.body);
    }
  
    //是否删除
    done() {
        let transform = this.body.GetTransform();
        let pos = scaleToPixels(transform.position);
        if (pos.y > height + this.r * 2) {
            this.killBody();
            return true;
        }
        return false;
    }
  
    display() {
        let pos = scaleToPixels(this.body.GetPosition());
        let a = this.body.GetAngleRadians();

        rectMode(CENTER);
        push();
            translate(pos.x, pos.y);
            rotate(a);
            noFill();
            stroke(200);
            strokeWeight(2);
            ellipse(0, 0, this.r * 2, this.r * 2);
            line(0, 0, this.r, 0);
        pop();
    }
}
class CustomShape {
    constructor(x,y,vertices,density=1.0,friction=0.5,restitution=0.2,linearVelocity=new box2d.b2Vec2(random(-5, 5), random(2, 5)),angularVelocity=(random(-5,5))) {

        let bd = new box2d.b2BodyDef();
        bd.type = box2d.b2BodyType.b2_dynamicBody;
        bd.position = scaleToWorld(x, y);

        let fd = new box2d.b2FixtureDef();

        fd.shape = new box2d.b2PolygonShape();
        fd.shape.SetAsArray(vertices, vertices.length);

        fd.density = density;
        fd.friction = friction;
        fd.restitution = restitution;

        this.body = world.CreateBody(bd);
        this.body.CreateFixture(fd);

        //额外设置
        this.body.SetLinearVelocity(linearVelocity);
        this.body.SetAngularVelocity(angularVelocity);
    }

    killBody() {
        world.DestroyBody(this.body);
    }

    done() {
        let pos = scaleToPixels(this.body.GetPosition());
        if (pos.y > height + this.w * this.h) {
            this.killBody();
            return true;
        }
        return false;
    }

    display() {
        let pos = scaleToPixels(this.body.GetPosition());
        let a = this.body.GetAngleRadians();

        let f = this.body.GetFixtureList();
        let ps = f.GetShape();

        rectMode(CENTER);
        push();
            translate(pos.x, pos.y);
            rotate(a);
            noFill();
            stroke(200);
            strokeWeight(2);
            beginShape();
                for (let i = 0; i < ps.m_count; i++) {
                    let v = scaleToPixels(ps.m_vertices[i]);
                    vertex(v.x, v.y);
                }
            endShape(CLOSE);
        pop();
    }
}
class Pair {
    constructor(x, y) {
        this.len = 72;

        this.p1 = new Circle(x, y,30);
        this.p2 = new Circle(x + random(-1, 1), y + random(-1, 1),30);

        let djd = new box2d.b2DistanceJointDef();
        //连接
        djd.bodyA = this.p1.body;
        djd.bodyB = this.p2.body;
        //长度
        djd.length = scaleToWorld(this.len);

        //设置关节物理属性
        djd.frequencyHz = 3;
        djd.dampingRatio = 0.1;

        let dj = world.CreateJoint(djd);
    }

    done() {
        return this.p1.done() && this.p2.done();
    }

    display() {
        let pos1 = scaleToPixels(this.p1.body.GetPosition());
        let pos2 = scaleToPixels(this.p2.body.GetPosition());

        stroke(200);
        strokeWeight(2);
        line(pos1.x, pos1.y, pos2.x, pos2.y);

        this.p1.display();
        this.p2.display();
    }
}
class WindmillBox {
    constructor(x, y, w, h, lock) {
        this.w = w;
        this.h = h;
    
        let bd = new box2d.b2BodyDef();
        if (lock) bd.type = box2d.b2BodyType.b2_staticBody;
        else bd.type = box2d.b2BodyType.b2_dynamicBody;
        bd.position = scaleToWorld(x, y);
    
        let fd = new box2d.b2FixtureDef();
        fd.shape = new box2d.b2PolygonShape();
        fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));
    
        fd.density = 1.0;
        fd.friction = 0.5;
        fd.restitution = 0.2;
    
        this.body = world.CreateBody(bd);
        this.body.CreateFixture(fd);
    
        this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
        this.body.SetAngularVelocity(random(-5, 5));
    }
  
    killBody() {
        world.DestroyBody(this.body);
    }
  
    done() {
        let pos = scaleToPixels(this.body.GetPosition());
        if (pos.y > height + this.w * this.h) {
            this.killBody();
            return true;
        }
        return false;
    }
  
    display() {
        let pos = scaleToPixels(this.body.GetPosition());
        let a = this.body.GetAngleRadians();
    
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(a);
        noFill();
        stroke(200);
        strokeWeight(2);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
class Windmill {
    constructor(x, y) {
        this.len = 32;
    
        this.box1 = new WindmillBox(x, y - 20, 320, 10, false);
        this.box2 = new WindmillBox(x, y, 10, 40, true);
    
        //定义关节
        let rjd = new box2d.b2RevoluteJointDef();
    
        rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());
    
        //打开马达
        rjd.motorSpeed = PI * 2; //速度
        rjd.maxMotorTorque = 10000000.0; //马力
        rjd.enableMotor = false; //是否打开
        
        //创建关节
        this.joint = world.CreateJoint(rjd);
    }
  
    display() {
        this.box1.display();
    
        let anchor = scaleToPixels(this.box1.body.GetWorldCenter());
        noFill();
        stroke(200);
        ellipse(anchor.x, anchor.y, 8, 8);
    }
  
    //开关马达
    toggleMotor() {
        this.joint.EnableMotor(!this.joint.IsMotorEnabled());
    }
    motorOn() {
        return this.joint.IsMotorEnabled();
    }
}
class Wheel{
    constructor(rotatePart,bodyPart,motorSpeed=-PI*12,maxMotorTorque=10000,enableMotor=false) {
            
        this.box1 = rotatePart;
        this.box2 = bodyPart;
    
        //定义关节
        let rjd = new box2d.b2RevoluteJointDef();
    
        rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());
    
        //打开马达
        rjd.motorSpeed = motorSpeed; //速度
        rjd.maxMotorTorque = maxMotorTorque; //马力
        rjd.enableMotor = enableMotor; //是否打开
        
        //创建关节
        this.joint = world.CreateJoint(rjd);
    }
  
    display() {
        this.box1.display();
        this.box2.display();
    
        let anchor = scaleToPixels(this.box1.body.GetWorldCenter());
        noFill();
        if(this.joint.IsMotorEnabled()){
            stroke(250,250,0);
            strokeWeight(3);
        }else{
            stroke(200);
        }
        ellipse(anchor.x, anchor.y, 8, 8);
    }
  
    //开关马达
    toggleMotor() {
        this.joint.EnableMotor(!this.joint.IsMotorEnabled());
    }
    motorOn() {
        return this.joint.IsMotorEnabled();
    }
}
class PowerLessCar{
    //无动力车厢
    constructor(x,y,len=160,wheelSize=20) {
        this.len=len;
        this.wheelSize=wheelSize;

        cwheel1=new Circle(x-this.len/2,y,this.wheelSize,1,0.9,0.3,new box2d.b2Vec2(0,0),0);
        cwheel2=new Circle(x+this.len/2,y,this.wheelSize,1,0.9,0.3,new box2d.b2Vec2(0,0),0);
        
        this.cbody=new Box(x,y-this.wheelSize,this.len,this.wheelSize,1,0.2,0.3,new box2d.b2Vec2(0,0),0);
        this.pwheel1=new Wheel(cwheel1,this.cbody);
        this.pwheel2=new Wheel(cwheel2,this.cbody);
    }
    display() {
        this.pwheel1.display();
        this.pwheel2.display();
        this.cbody.display();
    }
}
class JointDistanceObject {
    constructor(obj1,obj2,len,frequencyHz=3,dampingRatio=0.1) {
        this.len = len;

        this.p1 = obj1;
        this.p2 = obj2;

        let djd = new box2d.b2DistanceJointDef();
        //连接
        djd.bodyA = this.p1.body;
        djd.bodyB = this.p2.body;
        //长度
        djd.length = scaleToWorld(this.len);

        //设置关节物理属性
        djd.frequencyHz = frequencyHz;
        djd.dampingRatio = dampingRatio;

        let dj = world.CreateJoint(djd);
    }

    done() {
        return this.p1.done() && this.p2.done();
    }

    display() {
        let pos1 = scaleToPixels(this.p1.body.GetPosition());
        let pos2 = scaleToPixels(this.p2.body.GetPosition());

        stroke(200);
        strokeWeight(2);
        line(pos1.x, pos1.y, pos2.x, pos2.y);

        this.p1.display();
        this.p2.display();
    }
}
class Spring {
    constructor(x, y,frequencyHz = 5.0,dampingRatio = 0.9) {
        //一开始不显示
        this.mouseJoint = null;
        this.frequencyHz=frequencyHz;
        this.dampingRatio=dampingRatio;
    }
  
    //设置显示和位置
    update(x, y) {
        if (this.mouseJoint !== null) {
            //转换成世界坐标系
            let mouseWorld = scaleToWorld(x, y);
            this.mouseJoint.SetTarget(mouseWorld);
        }
    }
  
    display() {
      if (this.mouseJoint !== null) {
    
            let posA = this.mouseJoint.GetAnchorA();
            let posB = this.mouseJoint.GetAnchorB();
    
            let v1 = scaleToPixels(posA.x, posA.y);
            let v2 = scaleToPixels(posB.x, posB.y);
            stroke(200);
            strokeWeight(2);
    
            line(v1.x, v1.y, v2.x, v2.y);
        }
    }
  
    bind(x, y, box) {
        //定义关节
        let md = new box2d.b2MouseJointDef();
        //鼠标
        md.bodyA = world.CreateBody(new box2d.b2BodyDef()); //world.GetGroundBody();
        //物体
        md.bodyB = box.body;
        //获取鼠标位置
        let mp = scaleToWorld(x, y);
        md.target = mp;    
        //物理设置
        md.maxForce = 1000.0 * box.body.m_mass;
        md.frequencyHz = this.frequencyHz;
        md.dampingRatio = this.dampingRatio;
    
        //创建关节
        this.mouseJoint = world.CreateJoint(md);
    }
  
    destroy() {
        //鼠标释放时销毁
        if (this.mouseJoint !== null) {
            world.DestroyJoint(this.mouseJoint);
            this.mouseJoint = null;
        }
    }
}
class Boundary {
        //x,y,宽,高
        constructor(x, y, w, h,density=1.0,friction=0.5,restitution=0.2) {
        this.x = x;
        this.y = y;
        this.w = w*2;
        this.h = h*2;

        let fd = new box2d.b2FixtureDef();
        fd.density = density;
        fd.friction = friction;
        fd.restitution = restitution;

        let bd = new box2d.b2BodyDef();

        bd.type = box2d.b2BodyType.b2_staticBody;
        bd.position.x = scaleToWorld(this.x);
        bd.position.y = scaleToWorld(this.y);
        fd.shape = new box2d.b2PolygonShape();
        fd.shape.SetAsBox(this.w / (scaleFactor * 2), this.h / (scaleFactor * 2));
        this.body = world.CreateBody(bd).CreateFixture(fd);
    }

    display() {
        fill(127);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}
class Surface {
    constructor(surface,density=1.0,friction=0.1,restitution=0.3) {
        this.surface = surface;
        //传入surface数组

        for (let i = 0; i < this.surface.length; i++) {
            this.surface[i] = scaleToWorld(this.surface[i]);//坐标转换
        }

        // 实例化形状对象
        let chain = new box2d.b2ChainShape();
        chain.CreateChain(this.surface, this.surface.length);

        //以一个实体来附着对象
        let bd = new box2d.b2BodyDef();
        this.body = world.CreateBody(bd);

        //定义夹具
        let fd = new box2d.b2FixtureDef();
        fd.shape = chain;

        //物理属性设置
        fd.density = density;
        fd.friction = friction;
        fd.restitution = restitution;

        //将夹具绑定到形状
        this.body.CreateFixture(fd);
    }

    display() {
        noStroke();
        fill(127);
        beginShape();
            for (let i = 0; i < this.surface.length; i++) {
                let v = scaleToPixels(this.surface[i]);
                vertex(v.x, v.y);
            }
            vertex(width, height);
            vertex(0, height);
        endShape(CLOSE);
    }
}

class CustomListener {
    BeginContact(contact) {
        let f1 = contact.GetFixtureA();
        let f2 = contact.GetFixtureB();
        // Get both bodies
        let b1 = f1.GetBody();
        let b2 = f2.GetBody();
    
        // Get our objects that reference these bodies
        let o1 = b1.GetUserData();
        let o2 = b2.GetUserData();
    
        if (o1 instanceof Box && o2 instanceof Box) {
            o1.changeColor();
            o2.changeColor();
        }
    }
  
    EndContact(contact) {};
  
    PreSolve(contact, manifold) {};
  
    PostSolve(contact, manifold) {};
  }
