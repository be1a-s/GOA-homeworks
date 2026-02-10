// 3) შექმენით person ობიექტი firstName, lastName და age ველებით. გამოიყენეთ object destructuring და აიღეთ firstName და age ცალკე ცვლადებში. სცადეთ ისეთი ველის დესტრუქტურიზაცია რომელიც ობიექტში არ არსებობს და დააკვირდით მიღებულ მნიშვნელობას

let person = {
    firstName :"beqa",
    lastName :"abuladze",
    age : 16
}

let name,lname = person[firstName,lastName];
let und = person[height];

console.log(und)