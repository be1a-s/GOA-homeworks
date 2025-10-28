// 1) შექმენით ფუნქცია რომელიც cosole-ში გამოიტანს "Hello World"-ს, შემდეგ შექმენით ფუნქცია რომელიც დააბრუნებს რაიმე რიცხვს, აიღეთ ახალი ფუნქცია და დააბრუნეთ 2 რიცხვის ჯამი და საბოლოოდ ფუნქცია რომელიც არგუმენტად მიიღებს ფერს და კონკრეტულ პარაგრაფს მიანჭებს არგუმენტად გადაცემულ ფერს

function greet(){
    console.log("Hello World")
}

greet();

function number(a){
    console.log(a)
}

number(5);

function plus(a,b){
    console.log(a + b)
}

plus(5,10);

function color(id,color){
    const p = document.getElementById(id)
    p.style.color = color;
}

color("p","red");




