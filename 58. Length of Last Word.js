/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s.length) return 0;
    var n = s.split(" ");
    if (n.length < 1) return 1;
    
    if (!n[n.length-1].length)
        return getLastWord(1, n)
    return n[n.length - 1].length;
};

const getLastWord = function(index, n) {
    if (n.length-index >= 0) {
        if (!n[n.length-index].length)
            return getLastWord(index+1, n);
        else
            return n[n.length-index].length;
    } else return 0;
}
