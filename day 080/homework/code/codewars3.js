
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// Write Number in Expanded Form

function expandedForm(num) {
  return String(num)
  .split("")
  .map((digit, index, arr)=>
    digit+ "0".repeat(arr.length - index-1)  
  )
  .filter(x => !x.startsWith("0"))
  .join(" + ");
}