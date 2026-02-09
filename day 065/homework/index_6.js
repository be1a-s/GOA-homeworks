// 7) შექმენით HTML input <input id="numInput" type="number" placeholder="Enter number"> და ღილაკი <button id="cubeBtn">Cube</button>. <p id="numOut"></p>. JS-ში დაწერეთ ფუნქცია cubeNumber(), რომ ღილაკზე დაჭერისას გამოჩნდეს შეყვანილი რიცხვის კუბი


let a = document.getElementById("numInput");
let b = document.getElementById("cubeBtn");
let p = document.getElementById("numOut");

b.onclick = function cubeNumber() {
    let c = a.value ;
    p.textContent = c**3
}