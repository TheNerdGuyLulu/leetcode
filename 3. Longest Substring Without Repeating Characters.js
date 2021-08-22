/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0, tempArr = [], restartIndex = 0;

    for (let i = 0; i < s.length; ++i) {
        if (tempArr.includes(s[i])) {
            tempArr = [];
            i = restartIndex++;
            continue;
        }
        tempArr.push(s[i]);
        if (tempArr.length > maxLength) maxLength = tempArr.length;
    }

    return maxLength;
};
