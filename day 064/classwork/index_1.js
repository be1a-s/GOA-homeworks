// 2) შექმენით ფორმა, რომელშიც სახელის, ემაილისა და პაროლის input-თან ერთად გექნებათ პრიბოების დამადასტურებელი checbox, როდესაც მოხდება ღილაკზე დაჭერა confirm ფუნქციით მომხმარებელს კითხეთ "Are you sure?" შემდეგ ამ ფუნქციიდან დაბრუნებული console-ში გამოიტანეთ


let n = document.getElementById("name");
let e = document.getElementById("email");
let p = document.getElementById("pass");
let c = document.getElementById("chbx");
let b = document.getElementById("btn");

b.onclick = function(){
    d = confirm("are you sure?")
    console.log(d)
}