// 15) შექმენით books მასივი title და author ველებით გამოიყენეთ map რომ მიიღოთ სტრინგები ფორმატში "Title by Author"

let books = [{title:"ჯინსების თაობა",author:"დათო ტურაშვილი"},{title:"supernatural",author:"chuk"}];
let arr = books.map((i)=>{
    return `${i.title} by ${i.author}`
})

console.log(arr)