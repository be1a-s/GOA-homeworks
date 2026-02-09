
// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

// Duplicate Arguments

function solution(...arr){
  let seen = new Set();
  for(let value of arr){
    if(seen.has(value)) return true;
    seen.add(value);
  }
  return false
}