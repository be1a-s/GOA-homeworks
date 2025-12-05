// 3) შექმენით HTML input <input id="yearInput" type="number" placeholder="Enter your birth year"> და ღილაკი <button id="yearBtn">Check Age</button>. <p id="ageMsg"></p>. JS-ში დაწერეთ ფუნქცია checkBirthYear(), რომელიც დაყაჩაღებს მომხმარებლის ასაკს და გამოიტანს ტექსტს: თუ ასაკი < 18 → "Minor", თუ ≥ 18 → "Adult"

let b = document.getElementById("yearBtn");
let i = document.getElementById("yearInput");
let p = document.getElementById("ageMsg");

b.onclick = function() {
    let g = i.value;
    if (g >= 18){
        p.textContent = "Adult"
    }
    else if (g < 18) {
        p.textContent = "Minor"
    }
}