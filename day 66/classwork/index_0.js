// 1) შექმენით ლოგიკური ოპერაციების ტესტიერების გვერდი, რომელზეც გექნებათ და ლოგიკური ოპერაცია, უნდა გქონდეთ 2 შესატანი checkbox boolean მნიშვნლობებისთვის, დამადასტურებელი ღილაკი და შედეგის საჩვენებელი პარაგრაფი, ყველა ეს ელემენტი შეინახეთ javascript-ის ცვლლადში და როდესაც მოხდება ღილაკზე დაჭერა მომხამრებლის შემოტანილი მნიშვნელობებს შორის შეასრულეთ და ლოგიკური ოპერაცია და გამოიტანეთ პარაგრაფის შედეგად

let and1 = document.getElementById("and1");
let and2 = document.getElementById("and2");
let btn = document.getElementById("andsubmit");
let p = document.getElementById("andres");

btn.onclick = function (){
    let val1 = and1.checked;
    let val2 = and2.checked;
    let result = val1 && val2;
    p.textContent = "result:" + result;
    console.log(val1 && val2)
}