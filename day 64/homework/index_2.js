// 4) შექმენით HTML ღილაკი <button id="compBtn">Compare</button> და პარაგრაფი <p id="compOut"></p>. გამოიყენეთ external JS და ფუნქცია compareNumbers(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt ორი რიცხვისთვის. პარაგრაფში გამოჩნდეს რომელი რიცხვია უფრო დიდი

let btn = document.getElementById("compBtn");
let p = document.getElementById("compOut");

btn.onclick = function() {
    let a = prompt("enter first number");
    let b = prompt("enter second number");

    if (a > b){
        p.textContent = a;
    }
    else if(a < b) {
        p.textContent = b;
    }
    else if (a === b) {
        p.textContent = "equal"
    }
}