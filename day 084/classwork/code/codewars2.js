
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
  const result = [];

  for (let n = a; n <= b; n++) {
    const digits = String(n).split('').map(Number);

    const sum = digits.reduce((acc, digit, index) => {
      return acc + Math.pow(digit, index + 1);
    }, 0);

    if (sum === n) {
      result.push(n);
    }
  }

  return result;
}
