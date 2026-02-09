// 4) შექმენით ფორმა რომელშიც მომხმარებელი შეიყვანს თავის სახელს submit-ზე ეს სახელი შეინახეთ localStorage-ში setItem-ის გამოყენებით და შემდეგ ეკრანზე გამოიტანეთ გამარჯობა [სახელი]

let username = document.querySelector("input");
let btn= document.querySelector("button");
let body= document.querySelector("body");

btn.addEventListener("click", function(){
    localStorage.setItem("name" , username.value)
    let d = localStorage.getItem("name")
    let p = document.createElement("p");
    p.textContent = "hello " + d ;
    body.appendChild(p)
})

