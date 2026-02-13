// 11) შექმენით names მასივი ['John','Jane','Mike','Anna'] გამოიყენეთ map რომ მიიღოთ ახალი მასივი სადაც თითოეული ელემენტის მნიშვნელობა არის სახელის სიგრძე შემდეგ იგივე გააკეთეთ manualMap ფუნქციით ბოლოს გამოიყენეთ reduce ან manualReduce რომ იპოვოთ ყველა სიგრძის ჯამი და ახსენით როგორ იცვლება acc თითო იტერაციაზე

let names = ['John','Jane','Mike','Anna'];

let len = names.map((num)=>{return num.length});

let sum = len.reduce((sum,num)=>{
    sum+=num
    return sum
})

console.log(sum)