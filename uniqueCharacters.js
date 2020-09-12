function check(str) {
  const hash = {};
  let firstValue = -1;
  str.split("").forEach((char, index) => {
    if (hash[char]) hash[char] = Infinity;
    else hash[char] = index;
  });
  Object.values(hash).forEach((val) => {
    if (val < firstValue && firstValue >= 0) {
      firstValue = val;
    }
  });
  return firstValue;
}

console.log(check("abcabd"), "return 2");
console.log(check("thedailybyte"), " return 1");
console.log(check("developer"), "return 0");
