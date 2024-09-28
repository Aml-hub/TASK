class shape{
    constructor(){
        if(this.constructor===shape){
            throw Error("error")
        }
    }
    area(){
        throw  Error("method must implemented")
    }
}
class rectangle extends shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}
class square extends shape{
    constructor(side){
        super();
        this.side=side;
    }
    area(){
        return this.side*this.side;
    }
}
class circle extends shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
}
let rect= new rectangle(10,15);
console.log("area of rectangle=" + rect.area());
let squr= new square(10);
console.log("area of sqaure=" + squr.area());
let circl= new circle(5);
console.log("area of circle=" + circl.area());