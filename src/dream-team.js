const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = [];

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((element) => {
    if (typeof element === 'string') {
      const res = element.split(/\s/).join('');
      str.push(res[0].toUpperCase());
    }
  });

  str.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }

    return 0;
  });

  str = str.join('');
  return str;
}

module.exports = {
  createDreamTeam
};
