/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let k = x + "";
    let y = "";

    for (let i = 0; i < k.length; i++) {
        y += k[k.length - (i + 1)];
    }

    if (k === y)
        return true;
    else
        return false;
};
