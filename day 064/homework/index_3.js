// 5) შექმენით HTML input <input id="wordInput" type="text" placeholder="Enter word"> და ღილაკი <button id="lengthBtn">Check Length</button>. ასევე პარაგრაფი <p id="wordOut"></p>. გამოიყენეთ external JS და ფუნქცია checkLength(), რომ ღილაკზე დაჭერისას გამოჩნდეს შეყვანილი სიტყვის სიმბოლოთა რაოდენობა


let inp = document.getElementById("wordInput");
let btn = document.getElementById("lengthBtn");
let p = document.getElementById("wordOut");

btn.onclick = function checklenght() {
    let a =inp.value;
    p.textContent = a.length;
}