// /2) შექმენით HTML checkbox-ები <input id="val1" type="checkbox"> და <input id="val2" type="checkbox">, ღილაკი <button id="orBtn">Check OR</button> და <p id="orOut"></p>. JS-ში დაწერეთ ფუნქცია checkOr(), რომელიც ღილაკზე დაჭერისას შეასრულებს || ოპერაციას ორივე checkbox-ზე და გამოიტანს შედეგს პარაგრაფში

let or1 = document.getElementById("val1");
let or2 = document.getElementById("val2");
let btn = document.getElementById("orBtn");
let p = document.getElementById("orOut");

btn.onclick = function (){
    let val1 = or1.checked;
    let val2 = or2.checked;
    p.textContent = val1 || val2;
}