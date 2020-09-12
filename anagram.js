function check(s, t) {
  const hash = {};

  s.split("").forEach((letter) => {
    hash[letter] = 1 + (hash[letter] || 0);
  });

  t.split("").forEach((letter) => {
    hash[letter] = (hash[letter] || 0) - 1;
  });

  return !Object.keys(hash).find((key) => hash[key] !== 0);
}

const j1 = "cat";
const s1 = "tac";
console.log("Should return true, got: ", check(j1, s1));

const j2 = "listen";
const s2 = "silent";
console.log("Should return true, got: ", check(j2, s2));

const j3 = "program";
const s3 = "function";
console.log("Should return false, got: ", check(j3, s3));
