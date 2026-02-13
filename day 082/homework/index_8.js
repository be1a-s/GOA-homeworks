// 9) შექმენით manualMap ფუნქცია რომელიც იღებს მასივს და callback ფუნქციას და აბრუნებს ახალ მასივს გამოიყენეთ ეს manualMap numbersArr მასივზე რომ შექმნათ ახალი მასივი სადაც ყველა რიცხვი გაორმაგებულია შემდეგ იგივე გააკეთეთ ჩაშენებული map მეთოდით და შეადარეთ მიღებული შედეგები

const Manualmap = (arr,callback) => {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        let newvalue = callback(currentValue,i,arr)
        result.push(newvalue)
    }
    return result
}

let numbersarr = [1,2,3,35,2,34,43,5,4];

let square1 = Manualmap(numbersarr,(num)=>{return num**2});
console.log(square1)

let square2 = numbersarr.map((num)=>{return num**2});
console.log(square2)
