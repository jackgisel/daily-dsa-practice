/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];
  const openTag = new Map([
    ["[", "]"],
    ["(", ")"],
    ["{", "}"],
  ]);
  const closeTag = new Map([
    ["]", "["],
    [")", "("],
    ["}", "{"],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (openTag.get(s[i])) {
      stack.push(s[i]);
    } else if (closeTag.get(s[i]) == stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
};
