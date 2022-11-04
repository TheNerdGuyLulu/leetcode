/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const len = nums.length;
    const map = new Map();

    for (let i = 0; i < len; i++) {
        const n = nums[i];
        if (n % 2 === 0)
            map.set(n, (map.get(n) + 1) || 1);
    }

    if (!map.size) return -1;

    const x = [Infinity, -1];
    map.forEach((v, k) => {
        if (v > x[1] || (k < x[0] && v >= x[1])) {
            x[0] = k
            x[1] = v;
        }
    });

    return x[0];
};

console.log(mostFrequentEven([8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290]))