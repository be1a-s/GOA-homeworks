// 1) შექმენით 3 product კლასის მქონე div ელემენტი, პირველ ელემენტს მიანიჭეთ ასევე გასნხვავბული id და ჩაწერეთ მასში 2 თქვენთვის სასურველი ელემენტი, შემდეგ გამოიყეენთ ყველა ეს document-ის მეთოდი: getElementsByTagName, getElementsByClassName, previousElementSibling, nextElementSibling, firstChild, lastChild და კომენტარებით ახსენით როგორ მუშაობს თითოეული, ასევე დაწერეთ თუ რა არის 
//DOM

let a = document.getElementsByTagName("p");
let b = document.getElementsByClassName("product");
let c = document.previousElementsibling("h1");
let d = document.nextElementSibling("p");
let e = document.body.firstChild();
let f = document.body.lastChild();

// dom არის დოცუმენტის ობიექტების მოდელი და მასში არის ყველა ხილული თუ უცილავი html დოკუმენტი