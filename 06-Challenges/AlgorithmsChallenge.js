/**
 * 📊 Official Algorithms Challenge 3 - Solutions Archive
 * * Developer: Raji Al-Abdullah
 * * Date: June 22, 2026
 * * Matrix Master Full-Stack Web Development Bootcamp
 * * 🏛️ ARCHIVE NOTE: 
 * This document serves as the official production-grade code preservation 
 * for the structural logic, pseudocode architectures, and high-fidelity 
 * T-Diagram trace tables submitted for the Algorithm Challenge 3 evaluation.
 */

/* ==========================================================================
   🧩 ALGORITHM 1: EXCLUSIVE DIVISIBILITY (200 TO 2700)
   ==========================================================================
   * Requirements: Write Pseudocode + JS Code.
   * Description: Add all values between 200 and 2700 (inclusive) that are 
   * divisible by 3 or 5, but NOT BOTH 3 and 5 (Exclusive OR / XOR).
   * Time Complexity: O(n) | Space Complexity: O(1)
   
   📜 1. OFFICIAL PSEUDOCODE:
   --------------------------------------------------------------------------
   FUNCTION sumExclusiveDivisibility()
       Initialize sum = 0
       FOR i FROM 200 TO 2700 (inclusive)
           IF (i % 3 EQUALS 0 OR i % 5 EQUALS 0) AND NOT (i % 3 EQUALS 0 AND i % 5 EQUALS 0) THEN
               sum = sum + i
           ENDIF
       ENDFOR
       RETURN sum
   ENDFUNCTION
   --------------------------------------------------------------------------
*/

function sumExclusiveDivisibility() {
    let sum = 0;
    for (let i = 200; i < 2701; i++) {
        // Checking XOR Condition: Divisible by 3 or 5, but not their least common multiple (15)
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}


/* ==========================================================================
   🧩 ALGORITHM 2: FIBONACCI SUM BELOW ONE MILLION
   ==========================================================================
   * Requirements: Write Pseudocode + JS Code.
   * Description: For a Fibonacci sequence starting at 0 and 1, add up all the values 
   * that are strictly below 1,000,000.
   * Time Complexity: O(n) [Linear Sequence generation] | Space Complexity: O(1)
   
   📜 1. OFFICIAL PSEUDOCODE:
   --------------------------------------------------------------------------
   FUNCTION sumFibonacciBelowMillion()
       Initialize term1 = 0
       Initialize term2 = 1
       Initialize sum = 0
       
       WHILE term1 is less than 1,000,000
           sum = sum + term1
           nextTerm = term1 + term2
           term1 = term2
           term2 = nextTerm
       ENDWHILE
       RETURN sum
   ENDFUNCTION
   --------------------------------------------------------------------------
*/

function sumFibonacciBelowMillion() {
    let term1 = 0;
    let term2 = 1;
    let sum = 0;
    
    while (term1 < 1000000) {
        sum += term1;
        let nextTerm = term1 + term2;
        term1 = term2;
        term2 = nextTerm;
    }
    return sum;
}


/* ==========================================================================
   🧩 ALGORITHM 3: DYNAMIC FIZZBUZZ INTEGRATION (1 TO 135)
   ==========================================================================
   * Requirements: Write Pseudocode + JS Code.
   * Description: Insert numbers from 1 to 135 into an array, while replacing values 
   * divisible by 3 with "Fizz", values by 5 with "Buzz", and both with "FizzBuzz".
   * Time Complexity: O(n) | Space Complexity: O(n) [Array Allocation Block]
   
   📜 1. OFFICIAL PSEUDOCODE:
   --------------------------------------------------------------------------
   FUNCTION generateFizzBuzzArray()
       Initialize resultList as an empty array []
       FOR i FROM 1 TO 135
           IF i % 3 EQUALS 0 AND i % 5 EQUALS 0 THEN
               Push "FizzBuzz" into resultList
           ELSE IF i % 3 EQUALS 0 THEN
               Push "Fizz" into resultList
           ELSE IF i % 5 EQUALS 0 THEN
               Push "Buzz" into resultList
           ELSE
               Push i into resultList
           ENDIF
       ENDFOR
       RETURN resultList
   ENDFUNCTION
   --------------------------------------------------------------------------
*/

function generateFizzBuzzArray() {
    let resultList = [];
    for (let i = 1; i <= 135; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultList.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultList.push("Fizz");
        } else if (i % 5 === 0) {
            resultList.push("Buzz");
        } else {
            resultList.push(i);
        }
    }
    return resultList;
}


/* ==========================================================================
   🧩 ALGORITHM 4: ALGORITHMIC PALINDROME CHECKER
   ==========================================================================
   * Requirements: Write JS Code + Complete T-Diagram for the word 'kayak'.
   * Description: Check if a string is a palindrome ignoring punctuation, casing, and spacing.
   * Time Complexity: O(n) | Space Complexity: O(1) [Two-Pointer Paradigm]
   
   📊 1. OFFICIAL STRUCTURAL T-DIAGRAM (Trace Table Evaluation):
   * Input Target String: str = "kayak"
   
   +---------+-------+-------+------------+------------+-----------------------+--------+
   |   str   | left  | right | str[left]  | str[right] | str[left]===str[right]| Return |
   +---------+-------+-------+------------+------------+-----------------------+--------+
   | "kayak" |   0   |   4   |    'k'     |    'k'     |      True             |  N/A   |
   | "kayak" |   1   |   3   |    'a'     |    'a'     |      True             |  N/A   |
   | "kayak" |   2   |   2   |  Loop Ends (left < right is False)                 |  True  |
   +---------+-------+-------+------------+------------+-----------------------+--------+
   | Final Execution Outcome: Returns true (Clean Palindrome Match confirmed)          |
   +------------------------------------------------------------------------------------+
*/

function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    
    // Clean string by removing punctuation, spaces and lowering casing
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let left = 0;
    let right = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


/* ==========================================================================
   🧩 ALGORITHM 5: ITERATIVE NEGATIVE NUMBERS REMOVAL
   ==========================================================================
   * Requirements: Write JS Code + Complete T-Diagram for array [1, -2, 3].
   * Description: Scan an array, remove negative values, and return the filtered array.
   * Time Complexity: O(n) | Space Complexity: O(n) [Resultant array creation]
   
   📊 1. OFFICIAL STRUCTURAL T-DIAGRAM (Trace Table Evaluation):
   * Input Target Array: arr = [1, -2, 3]
   
   +-----------+----+--------+-------------+-------------+
   |    arr    | i  | arr[i] | arr[i] >= 0 |  resultArr  |
   +-----------+----+--------+-------------+-------------+
   | [1,-2,3]  |Init|  N/A   |     N/A     |     []      |
   | [1,-2,3]  | 0  |   1    |    True     |    [1]      |
   | [1,-2,3]  | 1  |  -2    |    False    |    [1]      |
   | [1,-2,3]  | 2  |   3    |    True     |   [1, 3]    |
   +-----------+----+--------+-------------+-------------+
   | Return: Filtered non-negative sequence data vector => [1, 3]    |
   +-----------------------------------------------------------+
*/

function removeNegative(arr) {
    if (!Array.isArray(arr)) return [];
    
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}


// ==========================================================================
// 🧪 INTEGRATED CORE CHALLENGE AUTOMATED RUNTIME TEST SUITE
// ==========================================================================
console.log(`====================================================`);
console.log(`🔬 RUNTIME VERIFICATION FOR OFFICIAL CHALLENGE 3`);
console.log(`====================================================`);

console.log(`[Algorithm 1] Exclusive Divisibility Sum (200-2700): ${sumExclusiveDivisibility()}`);
console.log(`[Algorithm 2] Total Fibonacci Sum Below 1,000,000:   ${sumFibonacciBelowMillion()}`);

const fizzBuzzOutput = generateFizzBuzzArray();
console.log(`[Algorithm 3] Length: ${fizzBuzzOutput.length} | Check Index 15: ${fizzBuzzOutput[14]}`);
console.log(`[Algorithm 4] Is 'kayak' a Palindrome?:   ${isPalindrome("kayak")}`);

const targetData = [1, -2, 3];
console.log(`[Algorithm 5] Input Vector: [1, -2, 3] | Filtered Output: [${removeNegative(targetData)}]`);
console.log(`====================================================`);