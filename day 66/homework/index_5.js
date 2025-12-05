// 7) შექმენით ორი HTML checkbox <input id="ticket" type="checkbox"> "მაქვს ბილეთი" და <input id="friend" type="checkbox"> "მყავს მეგობარი", ღილაკი <button id="entryBtn">Check Entry</button> და <p id="entryOut"></p>. JS-ში დაწერეთ ფუნქცია checkEntry(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ რომელიმე მონიშნულია || ოპერაციით, გამოიტანოს "შეგიძლიათ შესვლა", თუ არცერთი მონიშნულია — "შესვლა აკრძალულია"

let a =document.getElementById("ticket");
let c =document.getElementById("friend");
let b =document.getElementById("entryBtn");
let p =document.getElementById("entryOut");

b.onclick = function checkEntry() {
    let a1 = a.checked ;
    let c1 = c.checked ;
    if (a1 || c1 === true) {
        p.textContent = "შეგიძლიათ შესვლა"
    } else if (a1 || c1 === false) {
        p.textContent = "შესვლა აკრძალულია"
    }
}