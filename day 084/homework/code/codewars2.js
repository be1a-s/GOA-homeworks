
// https://www.codewars.com/kata/590adadea658017d90000039/train/javascript

// Fruit Machine

function fruit(reels, spins) {
  const scores = {
    "Wild": 10,
    "Star": 9,
    "Bell": 8,
    "Shell": 7,
    "Seven": 6,
    "Cherry": 5,
    "Bar": 4,
    "King": 3,
    "Queen": 2,
    "Jack": 1
  };
  const result = [
    reels[0][spins[0]],
    reels[1][spins[1]],
    reels[2][spins[2]]
  ];
  const counts = {};
  for (let item of result) {
    counts[item] = (counts[item] || 0) + 1;
  }
  const values = Object.values(counts);
  if (values.includes(3)) {
    return scores[result[0]] * 10;
  }
  if (values.includes(2)) {
    const pairSymbol = Object.keys(counts).find(key => counts[key] === 2);
    const singleSymbol = Object.keys(counts).find(key => counts[key] === 1);
    if (singleSymbol === "Wild") {
      return scores[pairSymbol] * 2;
    }
    return scores[pairSymbol];
  }
  return 0;
}