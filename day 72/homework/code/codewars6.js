
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// Reverse words

function reverseWords(str) {
  let list1 = str.split(" ")
  let a = []
  for (i of list1){
    a.push(i.split('').reverse().join(''))
  }
  a = a.join(" ");
  return a
}