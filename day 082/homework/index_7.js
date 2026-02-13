// 8) გამოიყენეთ numbersArr მასივი და reduce მეთოდი რომ იპოვოთ ყველა რიცხვის ჯამი და ნამრავლი გამოიყენეთ საწყისი მნიშვნელობა მაგალითად 0 ან 1 შემდეგ იგივე ოპერაციები შეასრულეთ manualReduce ფუნქციით და თქვენი სიტყვებით ახსენით რას ცვლის საწყისი მნიშვნელობა ჯამისა და ნამრავლის დათვლის პროცესში

let numbersarr = [1,2,3,35,2,34,43,5,4];

numbersarr.reduce((sum,num)=>{
    sum += num
})

numbersarr.reduce((sum,num)=>{
    sum *= num
})


const manualReduce = (arr,acumulator,callback) => {
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        let newvalue = callback(currentValue,i,arr)
        acumulator += newvalue
    }
    return acumulator
}

manualReduce(numbersarr,sum=1,(i)=>{
    sum += i
})

manualReduce(numbersarr,sum=1,(i)=>{
    sum *= i
})

console.log()