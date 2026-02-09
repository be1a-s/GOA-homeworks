
// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

// Prefill an Array

function prefill(n, v) {
  if (parseInt(n) != n || n<0){
    throw new TypeError(n + " is invalid")
  }
  let arr = [];
  for (let i=0;i<n;i++){
    arr.push(v)
  }
  return arr
}