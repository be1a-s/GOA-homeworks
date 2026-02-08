// 3) შექმენით simple counter პროექტი სადაც გაქვთ + და - ღილაკები მნიშვნელობა ნაჩვენებია p ელემენტში ღილაკებზე დაჭერისას მნიშვნელობა იზრდება ან კლებულობს გამოიყენეთ addEventListener

let p = document.querySelector("p");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
p.textContent = 0

btn1.addEventListener("click", function(){
    p.textContent = Number(p.textContent) - 1
})

btn2.addEventListener("click", function(){
    p.textContent = Number(p.textContent) + 1
})