
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

// Decipher this!

function decipherThis(str) {
    return str
      .split(' ')
      .map(word => {
        const num = word.match(/^\d+/)[0];
        const firstChar = String.fromCharCode(num);
        let rest = word.slice(num.length).split('');
        if (rest.length > 1) {
          [rest[0], rest[rest.length - 1]] =
            [rest[rest.length - 1], rest[0]];
        }
        return firstChar + rest.join('');
      })
      .join(' ');