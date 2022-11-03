/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let hasPair = false;
        for (let k = 0; k < nums.length; k++) {
            if (k === i) continue;
            if (nums[i] == nums[k]) {
                hasPair = true;
                break;
            }
        }
        if (!hasPair) return nums[i];
    }
};