// შექმენით მასივი arr სადაც თითო ელემენტი არის ობიექტი ველებით id და name მაგალითად [{id:123,name:"luka"},{id:456,name:"ana"}] გამოიყენეთ map მეთოდი რომ მიიღოთ ახალი მასივი სადაც დარჩება მხოლოდ სახელები შემდეგ იგივე გააკეთეთ manualMap ფუნქციით და კომენტარებში ახსენით რატომ არის მოსახერხებელი ობიექტებიდან მხოლოდ ერთი ველის ამოღება map მეთოდის საშუალებით

const Manualmap = (arr,callback) => {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        let newvalue = callback(currentValue,i,arr)
        result.push(newvalue)
    }
    return result
}

let arr = [{id:123,name1:"luka"},{id:456,name1:"ana"}]

let names1 = arr.map((names)=>{return names.name1});
let names2 = Manualmap(arr,(names)=>{return names.name1});
console.log(names1)
console.log(names2)

// კარგი მეთოდია რადგან თუ გვჭირდება მხოლოდ სახელები თავისუფლად შეგვიძლია გამოვაცალკევოდ ისინი ადვილად