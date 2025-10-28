// 4) შექმენით HTML ღილაკი <button id="passBtn">Enter Password</button> და პარაგრაფი <p id="passOut"></p>. გამოიყენეთ external JS და ფუნქცია getPassword(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your password". მიღებული პაროლი ჩაიწეროს პარაგრაფში

let btn = document.getElementById("passBtn");

let p = document.getElementById("passOut");

btn.onclick = function getPassword(){
    password = prompt("Enter your password");
    p.textContent = password
}