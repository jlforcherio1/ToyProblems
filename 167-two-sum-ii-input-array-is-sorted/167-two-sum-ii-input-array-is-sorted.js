/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var start = 0;
    var end = numbers.length - 1;
    
    while (start < end) {
        
        var result = sum(numbers[start], numbers[end]);
        
        console.log(result, target)
        
        if (result === target) {
            return [start + 1, end + 1]
        } else if (result < target) {
            start++;
        } else {
            end--;
        }
    }
    
};

var sum = function (a, b) {
    return a + b
}