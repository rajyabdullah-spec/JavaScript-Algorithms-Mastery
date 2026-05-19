/* Algorithm: Find the Longest Word in a String
   Goal: Return the length of the longest word in the provided sentence.
   Constraint: Use the split() method to handle string separation and track maxLength dynamically.
   Date: Tuesday, May 19, 2026
*/

function findLongestWord(str) {
    let words = str.split(' ');

    /* T-Diagram / Trace Table
       Example: str = "May the force" -> words = ["May", "the", "force"]
       
       | i | words[i]  | .length | Condition: length > maxLength | maxLength | Action
       |---|-----------|---------|-------------------------------|-----------|----------------------------------
       | - |     -     |    -    |               -               |     0     | Initial State
       | 0 | "May"     |    3    |          3 > 0 -> True        |     3     | 3 > 0 -> update maxLength to 3
       | 1 | "the"     |    3    |          3 > 3 -> False       |     3     | No change
       | 2 | "force"   |    5    |          5 > 3 -> True        |     5     | 5 > 3 -> update maxLength to 5
    */

    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length; // Update maxLength if a longer word is found
        }
    }

    return maxLength;
}

// Test Cases for the Three Requirements
console.log(typeof findLongestWord("The quick brown fox jumped over the lazy dog")); // Requirement 1 Output: number
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));         // Requirement 2 Output: 6
console.log(findLongestWord("May the force be with you"));                         // Requirement 3 Output: 5

// Exporting the function for environment tests
if (typeof module !== 'undefined') {
    module.exports = {
        findLongestWord
    };
}