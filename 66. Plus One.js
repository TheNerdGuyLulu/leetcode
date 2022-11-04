/**
 * @param {number[]} digits
 * @return {number[]}
 */
const increment = (digits, index) => {
    if (index === -1) {
        digits.unshift(1);
    } else {
        const next = digits[index] + 1;
        if (next === 10) {
            digits[index] = 0;
            increment(digits, index - 1);
        } else {
            digits[index] = next;
        }
    }
}

var plusOne = function (digits) {
    const last = digits.length - 1
    increment(digits, last);
    return digits;
};