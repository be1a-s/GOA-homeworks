
//zhttps://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//Square Every Digit

function squareDigits(num){
    let a = `${num}$`;
    let b = [];
    for (i of a){
        b.push(i**2)
    };
    b.pop();
    return Number(b.join(""))
}