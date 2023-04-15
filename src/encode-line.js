const { NotImplementedError } = require('../extensions/index.js');

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
  let res = '';
  
  if (!str) return str 
  str.match(/(.)\1*/g).map((arr) => {
    res += `${(arr.length > 1 ? arr.length : '')}${arr[0]}`
  });

  return res;
}

module.exports = {
  encodeLine
};
