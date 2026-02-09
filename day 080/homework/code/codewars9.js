
// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

// Beeramid

function beeramid(bonus, price) {
  let cans = Math.floor(bonus / price);
  let level = 0;

  while (cans >= (level + 1) ** 2) {
    level++;
    cans -= level ** 2;
  }

  return level;
}