const seen = new Set();

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let sum = 0;
    for (const c of String(n)) {
        sum += c * c;
    }

    if (!seen.has(sum)) {
        seen.add(sum)
    } else {
        return sum === 1;
    }

    if (sum === 1) {
        seen.clear();
        return true;
    }
    return isHappy(sum);
};