
// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript

// Twisted Sum

function twistedSum(n) {
  let num = 0;
  for (let i = 1; i <= n; i++){
    if (i.toString().length > 1){
      for (let b of i.toString()){
        num += Number(b);
      }
    }
    else {
      num += i
    }
  }
  return num
}