
// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

// Product Of Maximums Of Array (Array Series #2)

function maxProduct(numbers, size){
  return numbers
    .sort((a,b) => b-a)
    .slice(0,size)
    .reduce((a,b) => a*b, 1)
}