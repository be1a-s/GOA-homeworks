// 7) შექმენით fruits მასივი ['apple','banana','orange'] გამოიყენეთ forEach რომ console.log ში დაბეჭდოთ თითოეული ხილი დიდი ასოებით შემდეგ იგივე შედეგის მისაღებად გამოიყენეთ manualForEach და კომენტარებით ახსენით რა მნიშვნელობები გადაეცემა callback ფუნქციას თითო იტერაციაზე

let fruits = ['apple','banana','orange'];
let fruits1 =[];


fruits.forEach(
    (str)=>{
        fruits1.push(str.toUpperCase())
    }
);

const manualForEach = (arr,callback)=>{
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        callback(currentValue, i, arr)
    }
}
manualForEach(fruits,(num)=>console.log(num.toUpperCase()))
console.log(fruits1)