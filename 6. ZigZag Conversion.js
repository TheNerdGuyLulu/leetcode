/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = [];
    let str = "";
    let j = 0, r = 0, count = 0;

    for (let i = 0; i < s.length; i++) {
        arr[r] = [];

        for (let k = 0; k < numRows; k++) {
            arr[r].push(s[j]);
            count++;
            j++;
        }
        r++;
        for (let l = 0; l < numRows - 2; l++) {
            arr[r] = [];
            for (let k = l; k < numRows-2; k++)
                arr[r].push('');
            arr[r].push(s[j]);
            count++;
            j++;
            r++;
        }
        if (count >= s.length)
            break;

    }

    for (let i = 0; i < numRows; i++)
        for (let item of arr) {
            str += item[i] || '';
        }

    return str;
};
