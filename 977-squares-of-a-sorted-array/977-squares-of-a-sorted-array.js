/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = new Array(nums.length).fill(0);
    
    var left = 0;
    var right = nums.length - 1;
    var resultIndex = nums.length - 1;
    
    while (left <= right) {
        var leftValue = Math.pow(nums[left], 2);
        var rightValue = Math.pow(nums[right], 2);
        
        if (leftValue < rightValue) {
            result[resultIndex] = rightValue;
            right--;
        } else {
            result[resultIndex] = leftValue;
            left++;
        }
        
        resultIndex--;
    }
    return result;
};