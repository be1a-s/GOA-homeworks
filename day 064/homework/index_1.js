// 3) შექმენით HTML input <input id="numInput" type="number" placeholder="Enter number"> და ღილაკი <button id="doubleBtn">Double</button>. ასევე პარაგრაფი <p id="numOut"></p>. გამოიყენეთ external JS და ფუნქცია doubleNumber(), რომ ღილაკზე დაჭერისას შეყვანილი რიცხვი ორჯერ გაზრდილი გამოჩნდეს პარაგრაფში


let inp = document.getElementById("numInput");
let btn = document.getElementById("doubleBtn");
let p = document.getElementById("numOut");

btn.onclick = function(){
    let a = inp.value;
    p.textContent = parseInt(a) + parseInt(a);
}