// 13) შექმენით products.js ფაილი სადაც default export იქნება class Product და მას ექნება name და price ველები დამატებით შექმენით ორი named export ფუნქცია printName და printPrice რომლებიც მიიღებენ პროდუქტს და დაბეჭდავენ ველებს შემდეგ import Product printName printPrice სხვა ფაილში და გამოიყენეთ

export default class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

export function printName(product) {
  console.log(product.name);
}

export function printPrice(product) {
  console.log(product.price);
}