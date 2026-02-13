// გამოიყენეთ manualReduce ფუნქცია რომ იპოვოთ numbersArr მასივის მაქსიმალური ელემენტი callback ში შეადარეთ acc და cur და ყოველთვის შეინახეთ უფრო დიდი მნიშვნელობა იგივე ამოცანა შეასრულეთ ჩაშენებული reduce მეთოდით და დაადასტურეთ რომ ორივე შედეგი ემთხვევა


const manualReduce = (arr, callback, initialValue) => {
  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }

  return acc;
};

let numbersarr = [1,2,3,35,2,34,43,5,4];
let sum = manualReduce(numbersarr, (acc, cur) => acc + cur, 0);
let sum2 = numbersarr.reduce((sum,num)=>{
  sum+=num
  return sum
})
console.log(sum);
console.log(sum2);

// ორივეს გამოაქვს ერთი და იგივე შედეგი კონსოლში