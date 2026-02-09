// 3) შექმენით სამი ცვლადი var, let და const გამოყენებით. var-ით შექმენით მომხმარებლის სახელი, let-ით ასაკი და const-ით ქვეყანა. კომენტარებით ახსენით რა განსხვავებაა var let const შორის და რატომ ვერ ვცვლით const-ს. დაბეჭდეთ ყველა მნიშვნელობა template string-ით: `My name is ${name}, I am ${age}, I live in ${country}

var firstname = "beqa";
let age = 16;
const country = "georgia";

// var ქეივორდის მეშვეობიდ ვქმნით გლობალურ ცვლადს, ისარის ყველგან ხელმისაწვდომი
// let ქეივორდი შეგიძლია გამოიყენო იმ ბლოკში სადაც შეიქმნა ან მის ქვემოთ
// const არის იგივე რაც let ქეივორდი მაგრამ მისი მნიშვნელობის შეცვლა არ შეიძლება

console.log(`My name is ${firstname}, I am ${age}, I live in ${country}`)