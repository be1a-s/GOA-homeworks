// 4) შექმენით ობიექტი teacher, რომელსაც ექნება სახელი, საგანი და experience (წლები). დაამატეთ method greet(), რომელიც alert-ით გამოიტანს "Hello, I teach ...". HTML ღილაკზე <button id="greetBtn">Greet</button> დაჭერისას გამოძახეთ greet()

let btn = document.getElementById("greetBtn");

const teacher = {
    name : "jemal",
    object : "ist",
    experience : 4 
}



btn.onclick = function greet(){
    alert("hello, i teach ist")
}