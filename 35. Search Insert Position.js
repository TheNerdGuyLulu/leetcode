/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i;
    if ((i = nums.indexOf(target)) >= 0) {
        return i;
    } else {
        nums.push(target);
        nums.sort((a,b) => {return a - b});
        return nums.indexOf(target);
    }
};
