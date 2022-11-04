/**
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function (nums) {
    const len = nums.length;
    const map = new Map();

    for (let i = 0; i < len; i++) {
        map.set(nums[i], (map.get(nums[i]) + 1) || 1);
    }

    const x = [0, 0];
    map.forEach((v, k) => {
        if (v > len / 2 && v > x[1]) {
            x[0] = k
            x[1] = v;
        }
    });
    
    return x[0];
};