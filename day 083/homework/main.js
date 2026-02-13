import User, { getUserName, getUserAge } from "./user.js";

const user1 = new User("Beqa", 20);

console.log(getUserName(user1));
console.log(getUserAge(user1));