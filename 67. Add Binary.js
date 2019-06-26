/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

let plusOne = 0;
let arr = [];
var addBinary = function(a, b) {
    if (b.length > a.length) {
        let aux = a;
        a = b;
        b = aux;
    }
    plusOne = 0;
    arr = [];
    for (let i = 1; i <= a.length; ++i) {
        if (b.length - i >= 0) {
            let sum = Number(a[a.length - i]) + Number(b[b.length-i]) + plusOne;
            switchCases(sum);
        } else {
            let sum = Number(a[a.length - i]) + plusOne;
            switchCases(sum);
        }
    }
    if (plusOne)
           arr.unshift(1);
    
    return arr.join("");
};

const switchCases = function(sum) {
    switch (sum) {
        case 0:
            plusOne = 0;
            arr.unshift(0);
            break;
        case 1:
            plusOne = 0;
            arr.unshift(1);
            break;
        case 2:
            plusOne = 1;
            arr.unshift(0);
            break;
        case 3:
            plusOne = 1;
            arr.unshift(1);
            break;
    }
};
