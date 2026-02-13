// 2) შექმენით studentsMap Map სადაც key არის სტუდენტის სახელი ხოლო value მისი ქულა დაამატეთ 5 სტუდენტი შემდეგ გამოიყენეთ map.get და map.has რომ შეამოწმოთ კონკრეტული სტუდენტი ბოლოს map.delete ით წაშალეთ ერთი სტუდენტი და ჩაწერეთ რა დარჩა

let students = new Map([
    ["beqa",76],
    ["saba",80],
    ["luka",66],
    ["guga",50],
    ["nika",84]
])

console.log(students.get("saba"));
console.log(students.has(80));
students.delete("saba");
console.log(students)