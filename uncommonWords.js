function solve(str1, str2) {
  const hash = {};

  str1.split(" ").forEach((word) => {
    if (typeof hash[word] === "number") {
      hash[word] = 1;
    } else {
      hash[word] = 0;
    }
  });
  str2.split(" ").forEach((word) => {
    if (typeof hash[word] === "number") {
      hash[word] = 1;
    } else {
      hash[word] = 0;
    }
  });

  return Object.keys(hash).filter((word) => hash[word] === 0);
}

console.log(
  solve("the quick", "brown fox"),
  'return ["the", "quick", "brown", "fox"]'
);
console.log(
  solve("the tortoise beat the haire", "the tortoise lost to the haire"),
  'return ["beat", "to", "lost"]'
);
console.log(
  solve("copper coffee pot", "hot coffee pot"),
  'return ["copper", "hot"]'
);
console.log(solve("apple apple", "banana"), 'return ["banana"]');
