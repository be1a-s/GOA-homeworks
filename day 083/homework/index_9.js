// 12) შექმენით math.js ფაილი სადაც იქნება export function add(a,b) და export function multiply(a,b) და ბოლოს export default function subtract(a,b) შემდეგ სხვა ფაილში შემოიტანეთ subtract როგორც default და add multiply როგორც named და დაბეჭდეთ შედეგები

import subs ,{multiply,add} from "./math";

console.log(subs(1,2))
console.log(add(3,5))
console.log(multiply(17,23))

