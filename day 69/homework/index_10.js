//12) შექმენით ფუნქცია სახელად multiplyArray, რომელიც მიიღებს მასივს და ყველა ელემენტს გაამრავლებს 2-ზე, საბოლოოდ დააბრუნებს ახალ მასივს

function multiplyArray(arr) {
    let l = arr.length();
    let c = [];
    for (i of arr){
        c.push(i*2)
    }
    return c
} 