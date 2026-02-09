// 2) შექმენით HTML ღილაკი <button id="nameBtn">Enter Name</button> და პარაგრაფი <p id="output"></p>. გამოიყენეთ external JS და ფუნქცია showName(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your name". მიღებული სახელი ჩაიწეროს პარაგრაფში

let bt = document.getElementById("nameBtn");

let p = document.getElementById("output");



bt.onclick = function showName(){
    let name = prompt("Enter your name")
    p.textContent = name
}

