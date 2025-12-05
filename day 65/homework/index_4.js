// 5) შექმენით HTML input <input id="wordInput" type="text" placeholder="Enter word"> და ღილაკი <button id="reverseBtn">Reverse</button>. <p id="wordOut"></p>. JS-ში დაწერეთ ფუნქცია reverseWord(), რომელიც შეყვანილ სიტყვას გამოყოფს უკუღმა პარაგრაფში

let i = document.getElementById("wordInput");
let b = document.getElementById("reverseBtn");
let p = document.getElementById("wordOut");

b.onclick = function(){
    let c = i.value;
    let c2 = "";
    for (let x = c.length -1 ; x>= 0;x--){
        c2 += c[x];
    }
    p.textContent = c2;
}