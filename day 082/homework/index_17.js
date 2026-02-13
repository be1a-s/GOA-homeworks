// 18) შექმენით words მასივი და forEach ით დაითვალეთ თითო სიტყვა რამდენჯერ გვხვდება ობიექტში

let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let countobj = {};

words.forEach(word => {
  if (countobj[word]) {
    countobj[word]++;
  } else {
    countobj[word] = 1;
  }
});

console.log(countobj);