// 2) შექმენით რაიმე რიცხვების მასივი, შემდეგ 2-ჯერ გამოიყენეთ მასზე map, ერთ შემთხვევაში აიყვანეთ ყველა რიცხვი კვადრტაში, მეორე შემთხვევაში ყველა რიცხვი გაზარდეთ 5-ით. filter-ით გაფილტრეთ ლუწი რიცხვები და მეორე შემთხვევაში დატოვეთ ის რიცხვები ახალ სიაში რომლებიც თავიდან მხოლოდ 1-ხელ მეორდებოდა


let arr = [1,2,3,4,256,398,24,345,57,534,12]

let square = arr.map((num) => {return num **2})
let five =arr.map((num) => {return num + 5})
let evens = arr.filter((num)=>{return num%2===0})
let count = arr.filter((num,index,arr)=>{
    return arr.indexOf(num) === arr.lastIndexOf(num)})