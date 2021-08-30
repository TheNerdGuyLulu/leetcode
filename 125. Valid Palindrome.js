/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replaceAll(/[^0-9a-z]/gi, '').toLowerCase()
    
   return s.split('').reverse().join('') === s;
};
