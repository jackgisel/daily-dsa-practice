function uniqueCharacters(str) {
  const hash = {};
  str.split("").forEach((ch, i) => {
    hash[ch] = typeof hash[ch] === "number" ? Infinity : i;
  });
  const min = Object.values(hash).reduce(
    (min, cur) => Math.min(min, cur),
    Infinity
  );

  return min < Infinity ? min : -1;
}

console.log(uniqueCharacters("abcabd"), "return 2");
console.log(uniqueCharacters("thedailybyte"), " return 1");
console.log(uniqueCharacters("developer"), "return 0");
console.log(uniqueCharacters("cc"), "return -1");
