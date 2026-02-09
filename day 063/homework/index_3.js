// 5) შექმენით HTML input <input id="ageInput" type="number" placeholder="Enter age"> და ღილაკი <button id="ageBtn">Show Age</button>. ასევე პარაგრაფი <p id="ageOut"></p>. გამოიყენეთ external JS და ფუნქცია showAge(), რომ ღილაკზე დაჭერისას input-ში შეყვანილი ასაკი გამოჩნდეს პარაგრაფში

let inp = document.getElementById("ageInput");

let btn = document.getElementById("ageBtn");

let p = document.getElementById("ageOut");

btn.onclick = function showAge(){
    let age = inp.value;
    p.textContent = age
}