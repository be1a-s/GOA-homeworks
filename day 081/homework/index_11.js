// 13) შექმენით class AdvancedTriangle რომელიც Triangle-სგან იღებს მემკვიდრეობას და ამატებს perimeter() მეთოდს

class AdvancedTriangle extends Triangle {
    constructor(a,b,c){
        this.a =a;
        this.b =b;
        this.c =c;
    }
    perimeter(){
        return a+b+c
    }
}