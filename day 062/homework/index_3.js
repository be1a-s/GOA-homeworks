// <!-- 4) შექმენით HTML ღილაკი <button id="passBtn">Enter Password</button> და პარაგრაფი <p id="passOut"></p>. გამოიყენეთ external JS და ფუნქცია getPassword(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your password". მიღებული პაროლი ჩაიწეროს პარაგრაფში -->

let b = document.getElementById("passBtn")
        
let p = document.getElementById("passOut")
        
b.onclick = function(){
    let password = prompt("Enter your password");
    p.innerText= password;   
}