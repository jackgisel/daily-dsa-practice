function solve(arr1, arr2) {
  const hash = {};

  arr1.forEach((num) => (hash[num] = 1));
  arr2.forEach((num) => {
    if (hash[num] === 1) {
      hash[num] = 0;
    }
  });
  return Object.keys(hash).filter((key) => hash[key] === 0);
}

console.log(solve([2, 4, 4, 2], [2, 4]), " return [2, 4] ");
console.log(solve([1, 2, 3, 3], [3, 3]), " return [3] ");
console.log(solve([2, 4, 6, 8], [1, 3, 5, 7]), " return [] ");
