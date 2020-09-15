function spotTheDifference(s, j) {
  const hash = {};
  s.split("").forEach((ch) => {
    hash[ch] = hash[ch] ? hash[ch] + 1 : 1;
  });
  j.split("").forEach((ch) => {
    hash[ch] = hash[ch] ? hash[ch] - 1 : -1;
  });
  return (
    Object.keys(hash).find((key) => {
      if (hash[key] < 0) return key;
    }) || ""
  );
}

console.log(spotTheDifference("foobar", "barfoot"), " return 't'");
console.log(spotTheDifference("ide", "idea"), " return 'a'");
console.log(spotTheDifference("coding", "ingcod"), " return ''");
