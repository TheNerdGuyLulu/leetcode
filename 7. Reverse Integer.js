/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let signed = false;

    if (x < 0)
        signed = true;

    let k = x.toString().replace("-", '');
    let y = "";

    for (let i = 0; i < k.length; i++) {
        y += k[k.length - (i + 1)];
    }

    if (signed)
        y = "-" + y;

    if (y > 2147483647 || y < -2147483648)
        return 0;

    return y;
};
