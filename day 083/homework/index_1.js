// 3) შექმენით mySet Set რომელიც შეიცავს გამეორებულ რიცხვებს შემდეგ გამოიყენეთ size add და delete რომ დაამატოთ ახალი ელემენტი წაშალოთ ძველი და გამოიტანოთ საბოლოო ზომა size

let mayset = new Set([1,2,1,2,4,2,3,4,3,23]);


console.log(mayset.size);
mayset.add(5);
mayset.delete(2);
console.log(mayset.size);