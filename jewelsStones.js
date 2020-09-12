function jewelStones(jewels, stones) {
  const hash = {};
  jewels.split("").forEach((char) => {
    hash[char] = 1;
  });
  return stones.split("").reduce((sum, cur) => {
    if (hash[cur] === 1) sum++;
    return sum;
  }, 0);
}

const j1 = "abc";
const s1 = "ac";
console.log("Should return 2, got: ", jewelStones(j1, s1));

const j2 = "Af";
const s2 = "AaaddfFf";
console.log("Should return 3, got: ", jewelStones(j2, s2));

const j3 = "AYOPD";
const s3 = "ayopd";
console.log("Should return 0, got: ", jewelStones(j3, s3));
