// 11) შექმენით User class და გააკეთეთ default export ფაილის ბოლოში შემდეგ შექმენით ორი named export ფუნქცია getUserName და getUserAge რომლებიც მიიღებენ user ობიექტს და დაბეჭდავენ შესაბამის ინფორმაციას შემოიტანეთ import User და named ფუნქციები სხვა ფაილში და გამოიძახეთ

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function getUserName(user) {
  return user.name;
}

export function getUserAge(user) {
  return user.age;
}