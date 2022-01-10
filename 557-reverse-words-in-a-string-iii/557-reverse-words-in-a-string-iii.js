/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   var wordArray = s.split(' ');
    
    for (var i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].split('').reverse().join('')
    }
    
    wordArray = wordArray.join(' ')
    
    return wordArray;
};