/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
    if (s.length === 1)
        return s[0];
    else if (s.length === 2)
        if (s[0] !== s[1])
            return s[0];
        else
            return s[0]+s[1];
    else if (s.split('').every(char => char === s[0]))
        return s;
    else {
        let longest = "";
        for (let i = 0; i < s.length ; i++)
            for (let j = i; j < s.length; j++) {
                let substr = s.substr(i, s.length - j), test = true;
                if (substr.length > 1) {
                    for (let k = 0; k < Math.floor(substr.length / 2); k++) {
                        if (substr[k] !== substr[substr.length - (1 + k)]) {
                            test = false;
                        }
                    }
                    if (test && substr.length > longest.length)
                        longest = substr;
                    else if (test && substr.length > s.length-i)
                        return substr;
                }
            }
        return longest !== "" ? longest : s[0];
    }
};
