/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return JSON.stringify(cleanString(S)) == JSON.stringify(cleanString(T));
};

var cleanString = function (S) {
  let stack = [];
  S.split("").map((c) => {
    if (c !== "#") stack.push(c);
    if (c === "#") {
      if (stack.length) {
        stack.pop();
      }
    }
  });
  return stack;
};
