// შექმენით for ციკლი რომელიც მასივში მოძებნის ყველაზე დიდ რიცხვს და დაბეჭდავს მას



let arr = [2,3,64,7,,34,2,45];
let max = arr[0];

for (let i =1;i<arr.length();i++) {
    if(arr[i] > max){
        max = arr[i]
    }
}

console.log[max]