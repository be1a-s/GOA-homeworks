// 3) შექმენით HTML input <input id="userInput" type="text" placeholder="Type here"> და ღილაკი <button id="showBtn">Show</button>. ასევე პარაგრაფი <p id="display"></p>. გამოიყენეთ external JS და ფუნქცია displayText(), რომ ღილაკზე დაჭერისას input-ში შეყვანილი ტექსტი გამოჩნდეს პარაგრაფში

let bt = document.getElementById("showBtn");

let inp = document.getElementById("userInput");

let p = document.getElementById("display");

bt.onclick = function() {
    let i = inp.value;
    p.textContent = i
}
