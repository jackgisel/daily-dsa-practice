/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stack = [];
  S.split("").forEach((ch, i) => {
    if (i === 0) {
      stack.push(ch);
    } else {
      const prev = stack.pop();

      if (prev !== ch) {
        stack.push(prev);
        stack.push(ch);
      }
    }
  });
  return stack.join("");
};
