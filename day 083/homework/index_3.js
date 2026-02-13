// 5) შექმენით users Map სადაც key იქნება userId ხოლო value იქნება userName დაამატეთ მინიმუმ 4 user map.keys და map.values მეთოდებით გამოიტანეთ მხოლოდ id ები და მხოლოდ სახელები საბოლოოდ map.entries გამოიყენეთ რომ ნახოთ წყვილები

let users = new Map([
    [1356,"nino"]
])

users.set(9423,"lika");
users.set(5423,"ana");
users.set(9863,"beqa");
users.set(1884,"maia");

console.log(users.keys());
console.log(users.values());
console.log(users.entries());
