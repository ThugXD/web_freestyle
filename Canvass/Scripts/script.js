"use strict";

let c, ctx, W, H;
let dots = [];
let PI = Math.PI;

const random = (max=1, min=0) => Math.random() * (max - min) + min;

const clear = () => {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, W, H);
};

const checkBox = (m) => {
    if(document.getElementById("move").checked){
        return 50*Math.cos(m);
    }
    else return 0;
};

const createDots = () => {
  for (let i = 0; i < 1000; i++) {
        let a = random(2*PI); 
        let p = Math.acos((random(2))-1); 
        dots.push(new Dot(a, p, W/4, random(-2, -25), 0.01, 0));
        dots.push(new Dot(a, p, W/4, random(-2, -25), 0.01, PI));
  }
};

class Dot {
    constructor(a, p, w, sLine, s, m) {
        this.a = a;
        this.p = p;
        this.w = w;
        this.sLine = sLine;
        this.s = s;
        this.m = m;
        this.angle = 0;
    }
    project(x , y, z) {
        this.pX = Math.cos(this.angle)*x+ Math.sin(this.angle)*(z-1*-this.w);
        this.pZ  = -Math.sin(this.angle)*x+ Math.cos(this.angle)*(z-(1*-this.w))+1*-this.w;
        this.sizeProjection = W/(W-this.pZ);
        this.xProject = (this.pX*this.sizeProjection)+W/2;
        this.yProject = (y*this.sizeProjection)+H/2;
        return [this.xProject, this.yProject];
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth =  1*this.sizeProjection;
        ctx.moveTo(...this.project(this.x1, this.y1, this.z1));
        ctx.lineTo(...this.project(this.x2, this.y2, this.z2));
        ctx.stroke();
        ctx.closePath();
    }
    update() {
        this.m +=0.009;
        this.add_w1 = checkBox(this.m);
        this.angle += this.s;
        this.sLineCAl = this.add_w1<0 ? (-this.add_w1/-50*this.sLine*0.9) : 1;
        this.color = 'rgb(' + (200-this.add_w1*2) +',' +(255-this.add_w1*4) + ',255)';
        this.x1 = (this.w+this.add_w1)*Math.sin(this.p)*Math.cos(this.a);
        this.y1 = (this.w+this.add_w1)*Math.sin(this.p)*Math.sin(this.a);
        this.z1 = ((this.w+this.add_w1)*Math.cos(this.p))+1*-this.w;
        this.x2 = (this.w+this.add_w1-this.sLine -this.sLineCAl)*Math.sin(this.p)*Math.cos(this.a);
        this.y2 = (this.w+this.add_w1-this.sLine-this.sLineCAl)*Math.sin(this.p)*Math.sin(this.a);
        this.z2 = ((this.w+this.add_w1-this.sLine-this.sLineCAl)*Math.cos(this.p))+1*-this.w;
        this.draw();
    }
}

const init = () => {
    c = document.getElementById("canvas");
    c.width = W = window.innerWidth;
    c.height = H = window.innerHeight;
    ctx = c.getContext("2d");
    createDots();
    animate();
};

const animate = () => {
    clear();
    for (var i=0; i<dots.length; i++) dots[i].update();
    window.requestAnimationFrame(animate);
};

window.onload = init;




    