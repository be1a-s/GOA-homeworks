// 5) შექმენით ორი HTML input <input id="valA" type="number" placeholder="Enter number A"> და <input id="valB" type="number" placeholder="Enter number B">, ღილაკი <button id="orNumBtn">Check OR Numbers</button> და <p id="orNumOut"></p>. JS-ში დაწერეთ ფუნქცია checkOrNum(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ რომელიმე რიცხვი ნაკლებია 5-ზე და გამოიტანს შედეგს პარაგრაფში

let a =document.getElementById("valA");
let c =document.getElementById("valB");
let b =document.getElementById("orNumBtn");
let p =document.getElementById("orNumOut");

b.onclick = function checkOrNum() {
    let a1 = a.value ;
    let c1 = c.value ;
    let p1 = p.innerText;
    if (a1 < 5){
        p.textContent = p1 + a1
    } else if (c1 < 5){
        p.textContent = p1 + c1
    }
}
