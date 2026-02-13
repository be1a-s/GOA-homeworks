// 6) მოცემული გაქვთ numbersArr = [12,15,17,12,15,36,23,6,2,6] გამოიყენეთ filter მეთოდი რომ მიიღოთ მხოლოდ ლუწი რიცხვები შემდეგ იგივე ლუწი რიცხვების გაფილტვრა გააკეთეთ manualFilter ფუნქციით და ახსენით რა ხდება ნაბიჯ ნაბიჯ თქვენი სიტყვებით


let numbersArr = [12,15,17,12,15,36,23,6,2,6];

let even1 = numbersArr.filter((num)=>{return num%2===0});

const manualFilter = (arr,callback) => {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        if  (callback(currentValue,i,arr)){
         result.push(currentValue)   
        } 
    }
    return result
}

let even2 = manualFilter(numbersArr,(e)=>{
    return e%2===0
})

console.log(even1)
console.log(even2)