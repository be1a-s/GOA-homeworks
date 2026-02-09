// 2) შექმენით ვემგვერდი, რომელზეც გექნებათ სახელის, ემაილისა და პაროლის შესაანი ველები, როდესაც მომხარებელი დაადასტურებს თავის მონაცემებს და დააწვება ღილაკს თქვენ შეამოწმეთ რომელიმე ველი ცარიელია თუ არა (if-ით), თუ ასეა alert-ის მეშვეობით გამოუტანეთ რომ შეიყვანოს სრული ინფორმაცია

let i1 = document.getElementById("name");
let i2 = document.getElementById("email");
let i3 = document.getElementById("password");
let btn = document.getElementById("submit");

btn.onclick = function() {
    let val1 = i1.value ;
    let val2 = i2.value ;
    let val3 = i3.value ;
    if (val1 === "" || val1 === " ") {
        alert("you need name")
    }else if (val2 === "" || val2 === " ") {
        alert("you need email")
    }else if (val3 === "" || val3 === " ") {
        alert("you need password")
    }else {
        alert("now you are costumer")
    }
}
