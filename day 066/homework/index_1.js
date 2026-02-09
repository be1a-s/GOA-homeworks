// 3) შექმენით HTML checkbox <input id="notVal" type="checkbox">, ღილაკი <button id="notBtn">Check NOT</button> და <p id="notOut"></p>. JS-ში დაწერეთ ფუნქცია checkNot(), რომელიც ღილაკზე დაჭერისას შეასრულებს ! ოპერაციას checkbox-ზე და გამოიტანს შედეგს პარაგრაფში

let a = document.getElementById("not1");
let b = document.getElementById("notbtn");
let p = document.getElementById("notout");

b.onclick = function() {
    let val1 = a.checked;
    p.textContent = !val1
}