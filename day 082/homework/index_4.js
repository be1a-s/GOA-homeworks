// 5) შექმენით myArr მასივი ["AB","CD","ED"] გამოიყენეთ map მეთოდი რომ დააბრუნოთ ახალი მასივი სადაც თითოეულ ელემენტს ბოლოში ემატება თავისი ინდექსი მაგალითად "AB#0" შემდეგ იგივე შედეგი მიიღეთ თქვენი manualMap ფუნქციის გამოყენებით და კომენტარებში ახსენით callback ის სამი პარამეტრი value index და arr

let myArr = ["AB","CD","ED"];

let newarr = myArr.map((value,index) => { return value + `#${index}`});

console.log(newarr)

const Manualmap = (arr,callback) => {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        let newvalue = callback(currentValue,i,arr)
        result.push(newvalue)
    }
    return result
}

let newarr2 = Manualmap(myArr,(value,index) => { return value + `#${index}`})

console.log(newarr2)