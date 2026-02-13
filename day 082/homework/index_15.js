// 16) გაფილტრეთ people მასივი ასაკის მიხედვით 18 ზე ნაკლები და 18 ან მეტი filter ით

let people = [12,17,46,18,35,11,8,24];
let correctAge = people.filter((age)=>{
    return age >= 18
})
console.log(correctAge)