// 13) შექმენით products.js ფაილი სადაც default export იქნება class Product და მას ექნება name და price ველები დამატებით შექმენით ორი named export ფუნქცია printName და printPrice რომლებიც მიიღებენ პროდუქტს და დაბეჭდავენ ველებს შემდეგ import Product printName printPrice სხვა ფაილში და გამოიყენეთ


import Product, { printName, printPrice } from "./products.js";

const product1 = new Product("Laptop", 2500);

printName(product1);
printPrice(product1);