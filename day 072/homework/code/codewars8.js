
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// Jaden Casing Strings

/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase(){
      return this
        .split(" ")
        .map(word => word[0].toUpperCase()+word.slice(1).toLowerCase())
        .join(" ");
   }
  }
);