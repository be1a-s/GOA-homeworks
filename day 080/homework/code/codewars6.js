
// https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript

// Image host filename generator

function generateName(){
  const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let n;
  while (!n || photoManager.nameExists(n))
    n = Array.from({length:6}, _ => c[Math.floor(Math.random()*c.length)]).join('');
  return n;
}