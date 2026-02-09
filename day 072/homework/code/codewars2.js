
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Convert number to reversed array of digits

function digitize(n) {
    if (n=== 0){
      return [0]
    }
    let n1 = `${n}$`;
    let list1 = []
    for (i of n1){
      list1.push(Number(i))
    }
    let b = list1.reverse();
    b.shift();
    return b
  }
