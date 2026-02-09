// 4) შექმენით ul ელემენტი, რომლის შიგნით იქნება 4 li ელემენტი სხვადასხვა ტექსტებით, თითოეულს მიანიჭეთ საერთო class და განსხვავებული id, შემდეგ გამოიყენეთ ყველა ეს document-ის მეთოდი: getElementById, getElementsByTagName, getElementsByClassName, previousElementSibling, nextElementSibling, firstChild, lastChild, childNodes და კომენტარებით ახსენით როგორ მუშაობს თითოეული, ასევე დაწერეთ თუ რა არის DOM

let a = document.getElementsByTagName("p");
let b = document.getElementsByClassName("product");
let c = document.previousElementsibling("h1");
let d = document.a.nextElementSibling("p");
let e = document.body.firstChild();
let f = document.body.lastChild();
let j = document.getElementById("lis1")
// dom არის დოკუმენტის ობიექტების მოდელი და მასში არის ყველა ხილული თუ უცილავი html დოკუმენტი