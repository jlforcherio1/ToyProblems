/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var startIndex = 0;
    var endIndex = s.length - 1;
    
    while (startIndex < endIndex) {
        var temp = s[startIndex];
        s[startIndex] = s[endIndex]
        s[endIndex] = temp;
        startIndex++;
        endIndex--;
        console.log(s);
    }
    
};