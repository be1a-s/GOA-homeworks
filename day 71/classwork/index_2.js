// 3) შექმენით რიცხვების მასივსი და გამოიყენეთ მომცეული მეთოდებიდან ყველა თან ახსენით როგორ მუშაობენ

//pop - მებოლო ელემენტსთოდი სიიდან შლის სიის 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

//shift-unshift პირველი ფუნქცია სიიდან შლის პირველ ელემენტს მეორე კი ჩვენს გადაცემულ ელემენტს ამატებს სიის დასაწყისში
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.shift();
fruits2.unshift("Banana")

//slice მეთოდი სიიდან შლის ჩვენგან გადაცემული ინდექსის წინ მდგომ ყველა ელემენტს
let fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits3.slice(1);
//splice ჩვენგან გადაცემული პირველი ობიექტი ადგენს რომელ ინდექსზე ჩაემატოს ახალი ელემენტი მეორე კი ადგენს რამდენი წაიშალოს
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 2, "Lemon", "Kiwi");
//indexOf ეძებს ჩვენს გადაცემულ ობიექტს მასივში და  გვიბრუნებს ინდექსს რაზეც ელემენტი დგას
let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.indexOf("Apple")
//lastIndexOf იპოვის მაგალითდ ერთი ელემენტი ბევრჯერარის გამეორებული მის ბოლო გამეორების ინდექსს იპოვის

fruits5.lastIndexOf("Apple")

//includes - ის გვიჩვენებს მასივი სეიცავს თუ არა ჩვენგან გადაცემულ ელემენტს
let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.includes("Apple")
//find  მეთოდი აბრუნებს პირველი მასივის ელემენტის მნიშვნელობას, რომელიც გადის სატესტო ფუნქციას findIndex აკეთებს იგივეს ოღონდ გვიბრუნებს მის ინდექსს
const numbers = [4, 9, 16, 25, 29];
numbers.find(myFunction);
numbers.findIndex(myFunction)
function myFunction(value, index, array) {
  return value > 18;
}
