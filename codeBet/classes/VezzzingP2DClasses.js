class Box {
    constructor(x, y,w,h) {
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
    constructor(x, y, r) {
      this.r = r;
  
      let bd = new box2d.b2BodyDef();
      bd.type = box2d.b2BodyType.b2_dynamicBody;
      bd.position = scaleToWorld(x, y);
  
      let fd = new box2d.b2FixtureDef();
      fd.shape = new box2d.b2CircleShape();
      fd.shape.m_radius = scaleToWorld(this.r);
  
      fd.density = 1.0;
      fd.friction = 0.1;
      fd.restitution = 0.3;
  
      this.body = world.CreateBody(bd);
      this.body.CreateFixture(fd);
  
      //额外设置
      this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
      this.body.SetAngularVelocity(random(-5, 5));
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
    constructor(x,y,vertices) {

        let bd = new box2d.b2BodyDef();
        bd.type = box2d.b2BodyType.b2_dynamicBody;
        bd.position = scaleToWorld(x, y);

        let fd = new box2d.b2FixtureDef();

        fd.shape = new box2d.b2PolygonShape();
        fd.shape.SetAsArray(vertices, vertices.length);

        fd.density = 1.0;
        fd.friction = 0.5;
        fd.restitution = 0.2;

        this.body = world.CreateBody(bd);
        this.body.CreateFixture(fd);

        //额外设置
        //this.body.SetLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
        //this.body.SetAngularVelocity(random(-5,5));
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
class Boundary {
        //x,y,宽,高
        constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w*2;
        this.h = h*2;

        let fd = new box2d.b2FixtureDef();
        fd.density = 1.0;
        fd.friction = 0.5;
        fd.restitution = 0.2;

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
    constructor(surface) {
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
        fd.density = 1.0;
        fd.friction = 0.1;
        fd.restitution = 0.3;

        //将夹具绑定到形状
        this.body.CreateFixture(fd);
    }

    // A simple function to just draw the edge chain as a series of vertex points
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
