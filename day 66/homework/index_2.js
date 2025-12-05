// 4) შექმენით ორი HTML input <input id="num1" type="number" placeholder="Enter number 1"> და <input id="num2" type="number" placeholder="Enter number 2">, ღილაკი <button id="andBtn">Check AND</button> და <p id="andOut"></p>. JS-ში დაწერეთ ფუნქცია checkAnd(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ ორივე რიცხვი მეტია 10-ზე && ოპერაციით და გამოიტანს შედეგს პარაგრაფში


let a =document.getElementById("num1");
let c =document.getElementById("num2");
let b =document.getElementById("andBtn");
let p =document.getElementById("andOut");

b.onclick = function checkAnd() {
    let a1 = a.value ;
    let c1 = c.value ;
    p.textContent = a1 > 10 && c1 >10
}