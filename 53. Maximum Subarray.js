/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    for (let i = 0; i < nums.length; ++i) {
        let auxSum = 0;
        for (let j = i; j < nums.length; ++j) {
            auxSum += nums[j];
            if (auxSum > sum) 
                sum = auxSum;
        } 
    }
    return sum;
};
