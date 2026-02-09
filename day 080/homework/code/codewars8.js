
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Simple Pig Latin

function pigIt(str) {
  return str
    .split(' ')
    .map(word => {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.slice(1) + word[0] + 'ay';
      }
      return word; // punctuation
    })
    .join(' ');
}
