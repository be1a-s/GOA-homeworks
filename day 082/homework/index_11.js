// 12) შექმენით numArr მასივი [1,2,3,4,5,6,7,8] გამოიყენეთ filter მეთოდი რომ მიიღოთ მხოლოდ მარტივი ანუ პრაიმ რიცხვები შემდეგ სცადეთ იგივე ამოცანა manualFilter ფუნქციით და აღწერეთ თქვენი სიტყვებით როგორ ამოწმებთ არის თუ არა რიცხვი პრაიმი

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


let numArr = [1,2,3,4,5,6,7,8];

let primes = numArr.filter(num => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
});

let primes2 = manualFilter(numArr,num => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
})

console.log(primes,primes2)