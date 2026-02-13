// 12) შექმენით math.js ფაილი სადაც იქნება export function add(a,b) და export function multiply(a,b) და ბოლოს export default function subtract(a,b) შემდეგ სხვა ფაილში შემოიტანეთ subtract როგორც default და add multiply როგორც named და დაბეჭდეთ შედეგები

export function add(a,b){
    return a+b
}

export function multiply(a,b){
    return a*b
}

export  function subtract(a,b){
    return a/b
}