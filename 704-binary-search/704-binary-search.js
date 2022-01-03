/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var targetIndex = nums.indexOf(target);
    
    if (targetIndex === -1) {
        return -1;
    } else {
        return targetIndex;
    }
};