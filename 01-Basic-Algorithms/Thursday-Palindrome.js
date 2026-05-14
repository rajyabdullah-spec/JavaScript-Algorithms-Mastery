/**
 * Thursday: Palindrome Checker
 * * Logic:
 * 1. Clean string (remove spaces and convert to lowercase).
 * 2. Loop through half of the string.
 * 3. Compare characters from start and end.
 */

const isPalindrome = (str) => {
    const cleanStr = str.split(" ").join("").toLowerCase();
    
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false; 
        }
    }
    
    return true; 
};

// --- T-Diagram for isPalindrome("racecar") ---
/**
 * | Iteration | i | cleanStr[i] | cleanStr[length-1-i] | Match? | Result   |
 * |-----------|---|-------------|----------------------|--------|----------|
 * | 1st       | 0 | 'r'         | 'r'                  | Yes    | Continue |
 * | 2nd       | 1 | 'a'         | 'a'                  | Yes    | Continue |
 * | 3rd       | 2 | 'c'         | 'c'                  | Yes    | Continue |
 * | Final     | 3 | Loop Ends (i < 3.5 is true but next i=4) | Return true  |
 */

// Test Cases
console.log("racecar: ", isPalindrome("racecar")); 
console.log("hello: ", isPalindrome("hello"));     
console.log("A man a plan a canal Panama: ", isPalindrome("A man a plan a canal Panama"));