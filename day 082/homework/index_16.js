// 17) შექმენით numArr და ჯერ გაფილტრეთ 50 ზე მეტი რიცხვები შემდეგ გაანახევრეთ ისინი map ით

let numArr = [1,213,34,23543,76,49,50,2,543];
let higher = numArr.filter((num)=>{return num>50});
let two = higher.map((num)=>{return num/2})

console.log(higher,two)