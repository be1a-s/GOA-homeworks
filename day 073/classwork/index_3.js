// 4) შექმენით to do list გვერდი, რომელზეც გექნებათ შესატანი ველი და ღილაკი, ასევე სია რომელშიც გამოიტანთ იმ ელემენტებს რომლებსაც მომხმარებლი ჩაწერს შესატან ველში, ელეემნტი უნდა დაემატოს მხოლოდ მაშინ როდესაც მომხამრებელი დასმატებელ ელემენტს ღილაკზე დაკლიკებით დაადასტურებს

let btn = document.querySelector("button");
let task1 = document.getElementById("input");
let ul = document.querySelector("ul");

btn.onclick = function(){
    let newtask = document.createElement("li")
    newtask.textContent = task1.value;
    ul.appendChild(newtask)
    newtask.onclick= function(){
        newtask.style.color = "green"
    }
}