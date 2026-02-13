//1) შექმენით Map მონცამეთა ტიპი new Map([])-ის გამოყენებით რომელშიც დაამატეთ 5 მასივს წყვილს, მასზე გამოიყენეთ განხილული მეთდოები: delete, set, has, get, clear, keys, values, entries. შემდეგ შექმენით new Set([])-ის მეშვეობით set მონცამეთა ტიპი 5 ელემენტით და მასზეც გამოიყენეთ მეთოდები: add, delete, clear, has, size, values. კომენტარებით დაწერეთ რომელ მონცემთა თიპს გაგონებთ თითოეული პითონიდან და რატომ


let map = new Map([
    [1,"beqa"],
    [2,"saba"],
    [3,"nika"],
    [4,"guga"],
    [5,"giorgi"],
])

map.delete(1);
map.set(8,"beqa");
console.log(map.has(2));
console.log(map.get(4));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
map.clear()

let set = new Set([2,32,54,23,6,6,45]);

set.add(1000);
set.delete(2);
console.log(set.has(1000));
console.log(set.size)
console.log(set.values());
set.clear()