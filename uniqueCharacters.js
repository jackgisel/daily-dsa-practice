function check(str) {
  const hash = {};

  str.split("").forEach((char, index) => {
    if (hash[char]) hash[char] = Infinity;
    else hash[char] = index;
  });

  return hash[
    Object.keys(hash).find((item) => {
      return item !== Infinity;
    })
  ];
}

console.log(check("abcabd"), "return 2");
console.log(check("thedailybyte"), " return 1");
console.log(check("developer"), "return 0");
