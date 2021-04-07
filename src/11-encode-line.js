/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) count++;
      else break;
    }

    result += count > 1 ? `${count}${str[i]}` : str[i];
    i += count - 1;
  }

  return result;
}

module.exports = encodeLine;
