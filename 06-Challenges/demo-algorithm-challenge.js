/**
 * 📊 Mock Algorithm Challenge Suite
 * * Developer: Raji Al-Abdullah
 * * Date: June 22, 2026
 * * Time Limit: 60 Minutes (Alloted Space Mock Sheet)
 * 
 * Summary of Guidelines:
 * 1. Implement pure logic under constraint boundaries.
 * 2. Present clean Pseudo-code where explicitly requested (Problems 1, 2, 3).
 * 3. Present high-fidelity structural Trace Tables (T-Diagrams) where requested (Problems 4, 5).
 * 4. Ensure structural security checks and comprehensive automated test suites.
 */

/* ==========================================================================
   🧩 ALGORITHM 1: ARRAY REVERSING (SHIFTING TO FRONT)
   ==========================================================================
   * Requirements: Write Pseudocode + JS Code.
   * Description: Given an array X, shift each number by one to the front.
   * Example: [2, 1, 6, 4, -7] => Expected Output: [-7, 4, 6, 1, 2]
   * Time Complexity: O(n) | Space Complexity: O(1) [In-place Swap]
   
   📜 1. PSEUDOCODE:
   --------------------------------------------------------------------------
   FUNCTION reverseArray(X)
       Initialize 'start' pointer to 0
       Initialize 'end' pointer to length of X minus 1
       WHILE start is less than end
           Swap X[start] with X[end] using temporary storage
           Increment start by 1
           Decrement end by 1
       ENDWHILE
       RETURN X
   ENDFUNCTION
   --------------------------------------------------------------------------
*/

function reverseArray(X) {
    if (!Array.isArray(X) || X.length === 0) return [];
    
    let start = 0;
    let end = X.length - 1;
    
    while (start < end) {
        let temp = X[start];
        X[start] = X[end];
        X[end] = temp;
        start++;
        end--;
    }
    return X;
}


/* ==========================================================================
   🧩 ALGORITHM 2: RECURSIVE NEGATIVES REMOVAL
   ==========================================================================
   * Requirements: Write Pseudocode + JS Code (Recursive Paradigm).
   * Description: Filter out negative values from an array strictly via recursion.
   * Example: [1, -2, 4, 1] => Expected Output: [1, 4, 1]
   * Time Complexity: O(n) | Space Complexity: O(n) [Call Stack Depth Layer]
   
   📜 1. PSEUDOCODE:
   --------------------------------------------------------------------------
   FUNCTION removeNegativesRecursive(X, index = 0)
       IF index EQUALS length of X THEN
           RETURN an empty array []
       ENDIF
       
       Initialize 'restOfArray' via removeNegativesRecursive(X, index + 1)
       
       IF X[index] is greater than or equal to 0 THEN
           RETURN X[index] prepended to restOfArray
       ELSE
           RETURN restOfArray
       ENDIF
   ENDFUNCTION
   --------------------------------------------------------------------------
*/

function removeNegativesRecursive(X, index = 0) {
    // Base Case Boundary Check
    if (index === X.length) {
        return [];
    }
    
    // Recursive Downscaling Call Step
    const restOfArray = removeNegativesRecursive(X, index + 1);
    
    // Evaluation/Unwinding Phase Action
    if (X[index] >= 0) {
        return [X[index], ...restOfArray];
    } else {
        return restOfArray;
    }
}


/* ==========================================================================
   🧩 ALGORITHM 3: SELECTION SORT ASCENDING
   ==========================================================================
   * Requirements: Write Pseudocode + JS Code.
   * Description: Sort an integer array in ascending order via Selection Sort.
   * Example: [2, 7, 1, -2] => Expected Output: [-2, 1, 2, 7]
   * Time Complexity: O(n^2) | Space Complexity: O(1)
   
   📜 1. PSEUDOCODE:
   --------------------------------------------------------------------------
   FUNCTION selectionSort(IntArr)
       Set n = length of IntArr
       FOR i FROM 0 TO n - 2
           Set minIndex = i
           FOR j FROM i + 1 TO n - 1
               IF IntArr[j] is less than IntArr[minIndex] THEN
                   Set minIndex = j
               ENDIF
           ENDFOR
           IF minIndex NOT EQUAL i THEN
               Swap IntArr[i] with IntArr[minIndex]
           ENDIF
       ENDFOR
       RETURN IntArr
   ENDFUNCTION
   --------------------------------------------------------------------------
*/

function selectionSort(IntArr) {
    if (!Array.isArray(IntArr)) return [];
    const n = IntArr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (IntArr[j] < IntArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = IntArr[i];
            IntArr[i] = IntArr[minIndex];
            IntArr[minIndex] = temp;
        }
    }
    return IntArr;
}


/* ==========================================================================
   🧩 ALGORITHM 4: LARGEST NUMBERS IN SUB-ARRAYS
   ==========================================================================
   * Requirements: Write JS Code + T-Diagram Trace Table.
   * Description: Return an array consisting of the maximum value from 4 sub-arrays.
   * Time Complexity: O(n * m) | Space Complexity: O(n) [Results Storage Matrix]
   
   📊 1. STRUCTURAL T-DIAGRAM (Trace Table Test Case Evaluation):
   * Input Target Array: arr = [[4, 5], [1, 3]] (Scaled for explicit presentation clear view)
   
   +-----+----------+---------------+-----+------------+---------------------------+-----------+
   |  i  |  arr[i]  | largestNumber |  j  |  arr[i][j] | arr[i][j] > largestNumber |  results  |
   +-----+----------+---------------+-----+------------+---------------------------+-----------+
   |Init |   N/A    |      N/A      | N/A |    N/A     |           N/A             |    []     |
   |  0  |  [4, 5]  |       4       | N/A |    N/A     |           N/A             |    []     |
   |  0  |  [4, 5]  |   4 -> (5)    |  1  |     5      |    5 > 4 (True)           |    []     |
   |  0  | Loop End |       5       | N/A |    N/A     |           N/A             |   [5]     |
   |  1  |  [1, 3]  |       1       | N/A |    N/A     |           N/A             |   [5]     |
   |  1  |  [1, 3]  |   1 -> (3)    |  1  |     3      |    3 > 1 (True)           |   [5]     |
   |  1  | Loop End |       3       | N/A |    N/A     |           N/A             |  [5, 3]   |
   +-----+----------+---------------+-----+------------+---------------------------+-----------+
   | Return: Final array consisting of calculated high maximum nodes => [5, 3]                 |
   +-------------------------------------------------------------------------------------------+
*/

function largestOfFour(arr) {
    if (!Array.isArray(arr)) return [];
    let results = [];
    
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results.push(largestNumber);
    }
    return results;
}


/* ==========================================================================
   🧩 ALGORITHM 5: TITLE CASE A SENTENCE
   ==========================================================================
   * Requirements: Write JS Code + T-Diagram Trace Table.
   * Description: Returns provided string with first character of each word upper-cased.
   * Time Complexity: O(n) | Space Complexity: O(n) [Words Split Buffer Array]
   
   📊 1. STRUCTURAL T-DIAGRAM (Trace Table Test Case Evaluation):
   * Input Target String: str = "rEaCt cOdE"
   
   +--------------+--------------------+----+------------+-------------------------------------+--------+
   |     str      |       words        | i  |  words[i]  | charAt(0).toUpperCase() + slice(1)  | Output |
   +--------------+--------------------+----+------------+-------------------------------------+--------+
   | "rEaCt cOdE" | ["react", "code"]  | 0  |  "react"   | "R" + "eact" = "React"              |  N/A   |
   | "rEaCt cOdE" | ["React", "code"]  | 1  |   "code"   | "C" + "ode" = "Code"                |  N/A   |
   | "rEaCt cOdE" | ["React", "Code"]  |End |    N/A     |              N/A                    |"React" |
   +--------------+--------------------+----+------------+-------------------------------------+--------+
   | Return: Capitalized and cleanly unified text sentence buffer => "React Code"               |
   +--------------------------------------------------------------------------------------------+
*/

function titleCase(str) {
    if (typeof str !== 'string' || str.trim() === "") return "";
    
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(" ");
}


// ==========================================================================
// 🧪 INTEGRATED MOCK CHALLENGE AUTOMATED RUNTIME TEST SUITE
// ==========================================================================
console.log(`====================================================`);
console.log(`🔬 STARTING RUNTIME TEST LOGS FOR MOCK CHALLENGE`);
console.log(`====================================================`);

// Test 1: Array Reversing Execution Check
const xArr = [2, 1, 6, 4, -7];
console.log(`[Algorithm 1] Input: [2,1,6,4,-7] | Output: [${reverseArray([...xArr])}]`);

// Test 2: Recursion Negative Clear Check
const negArr = [1, -2, 4, 1];
console.log(`[Algorithm 2] Input: [1,-2,4,1]    | Output: [${removeNegativesRecursive(negArr)}]`);

// Test 3: Selection Sort Verification Check
const sortArr = [2, 7, 1, -2];
console.log(`[Algorithm 3] Input: [2,7,1,-2]    | Output: [${selectionSort([...sortArr])}]`);

// Test 4: Maximum Grid Values Extraction Check
const matrixArr = [
    [17, 5, 9, 2],
    [25, 84, 12, 9],
    [74, 11, 45, 32],
    [100, 201, 305, 4]
];
console.log(`[Algorithm 4] Output Vector: [${largestOfFour(matrixArr)}]`);

// Test 5: Structural Title Case Text Check
const sampleText = "I'm a lItTlE tEaPoT";
console.log(`[Algorithm 5] Input Sentence: "${sampleText}" \n              Result Output:  "${titleCase(sampleText)}"`);
console.log(`====================================================`);