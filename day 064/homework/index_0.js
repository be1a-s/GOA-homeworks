// 2) შექმენით HTML ღილაკი <button id="cityBtn">Enter City</button> და პარაგრაფი <p id="cityOut"></p>. გამოიყენეთ external JS და ფუნქცია getCity(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your city". მიღებული ქალაქი ჩაიწეროს პარაგრაფში 


let btn = document.getElementById("cityBtn");
let p = document.getElementById("cityOut");

btn.onclick = function(){
    let city = prompt("Enter your city");
    p.textContent = city
}