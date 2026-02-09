// 6) შექმენით HTML input <input id="ageInput" type="number" placeholder="Enter age">, ღილაკი <button id="ageBtn">Check Age</button> და <p id="ageOut"></p>. JS-ში დაწერეთ ფუნქცია checkAge(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ ასაკი 13–17 შუალედშია (>=13 && <=17). თუ პირობა სრულდება გამოიტანოს "Teenager", წინააღმდეგ შემთხვევაში "Not Teenager"

let a =document.getElementById("ageInput");
let b =document.getElementById("ageBtn");
let p =document.getElementById("ageOut");


b.onclick = function checkAge() {
    let a1 = a.value ;
    if (a1 >= 13 && a1 <=17) {
        p.textContent = "Teenager"
    } else {
        p.textContent = "Not Teenager"
    }
}