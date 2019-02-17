/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xh = Math.pow(2,31) - 1;
    let xl = Math.pow(-2, 31);
    let signed = false;

    if (x < 0)
        signed = true;

    let k = parseInt(x.toString().replace("-",'').split('').reverse().join(''));

    if (signed)
        k = k * -1;

    if (k > xh || k < xl)
        return 0;

    return k;
};
