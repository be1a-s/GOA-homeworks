// 2) შექმენით HTML ღილაკი <button id="bgBtn">Change Background</button> და <div id="box" style="width:100px;height:100px;background-color:lightblue;"></div>. JS-ში დაწერეთ ფუნქცია changeBackground(), რომ ღილაკზე დაჭერისას div-ის ფონი შეიცვალოს ყვითლად

let btn = document.getElementById("bgBtn");
let d = document.getElementById("box");

btn.onclick = function() {
    d.style.backgroundColor = "yellow";
}