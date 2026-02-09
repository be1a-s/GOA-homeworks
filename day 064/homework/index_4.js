// z6) შექმენით HTML ღილაკი <button id="calcBtn">Calculate</button> და პარაგრაფი <p id="calcOut"></p>. გამოიყენეთ external JS და ფუნქცია calculateSum(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt ორი რიცხვისთვის. პარაგრაფში გამოჩნდეს მათი ჯამი


let btn = document.getElementById("calcBtn");
let p = document.getElementById("calcOut");

btn.onclick = function(){
    let a = prompt("enter first number");
    let b = prompt("enter second number");
    p.textContent = parseInt(a) + parseInt(b);
}