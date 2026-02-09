
// https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript

// Arrays Similar

function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let a = [...arr1].sort();
  let b = [...arr2].sort();
  
  return a.every((val, index) => val === b[index]);
}