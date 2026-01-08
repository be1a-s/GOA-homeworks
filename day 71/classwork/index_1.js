// 2) for ციკლის მეშვეობით გადაუარეთ რიცხვებს 1-იდან 10-მდე, თითოეული რიცხვისთვის ობიექტის კონსტრუქტორით (აიღეთ კონსტრუქტორი for ციკლის გაშვებამდე) შექმენით ობიექტი რომელსაც ექნება 2 კუთვნილება რიცხვი და even (ან ლუწია თუ კენტი) თუ რიცხვი ლუწი იქნება მაშინ even კუთვნილების მნიშვნელობა უნდა იყოს true ხოლო სხვა შემთხვევაში false, ეს ყველა ობიექტი უნდა დაამატოთ nubmers მასივში


function nums(num,resoult){
    this.num = num,
    this.resoult = resoult
}
let numbers = [];
for(let i=0;i<10;i= i+1){
    if(i %2 ===0){
        numbers.push(newObject = new nums(i,true))
    }
    else if(i %2 != 0){
        numbers.push(newObject = new nums(i,false))
    }
}