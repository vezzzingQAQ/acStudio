class Box {
    constructor(x, y,w,h,density=1.0,friction=0.5,restitution=0.2,linearVelocity=new box2d.b2Vec2(random(-5, 5), random(2, 5)),angularVelocity=(random(-5,5))) {
        this.w = w;
        this.h = h;

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
        //获取位置和角度信息
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
class Circle {
    constructor(x, y, r,density=1.0,friction=0.1,restitution=0.3,linearVelocity=new box2d.b2Vec2(random(-5, 5), random(2, 5)),angularVelocity=(random(-5,5))) {
        this.r = r;
    
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
    constructor(rotatePart,bodyPart,motorSpeed=-PI*2,maxMotorTorque=100,enableMotor=false) {
        this.len = 32;
    
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
