/**
 * Thursday Assignment: Sum All Numbers in a Range
 * ------------------------------------------------
 * Location: JavaScript-Algorithms-Mastery / 02-Intermediate-Algorithms
 * * This file contains two engineering approaches to solve the range summation challenge:
 * 1. Iterative Approach (Using a For Loop) - O(n) Time Complexity
 * 2. Mathematical Approach (Using Gauss's Formula) - O(1) Time Complexity
 */

// =========================================================================
// APPROACH 1: ITERATIVE METHOD (FOR LOOP)
// =========================================================================
/**
 * T-Diagram (Trace Table) for sumAllIterative([1, 4]):
 * * * Initialized State:
 * min = 1 | max = 4 | totalSum = 0
 * * * Loop Progression:
 * | Iteration (i) | Condition (i <= max) | Action (totalSum += i) | New totalSum |
 * |--------------|----------------------|------------------------|--------------|
 * |       1        |    1 <= 4 (True)     |      0 + 1             |      1       |
 * |       2        |    2 <= 4 (True)     |      1 + 2             |      3       |
 * |       3        |    3 <= 4 (True)     |      3 + 3             |      6       |
 * |       4        |    4 <= 4 (True)     |      6 + 4             |      10      |
 * |       5        |    5 <= 4 (False)    |      Loop Terminates   |      10      |
 * * * Final Return Value: 10
 */
function sumAllIterative(arr) {
    // Determine bounds regardless of input order
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    
    let totalSum = 0;
    
    // Linearly accumulate every integer in the range
    for (let i = min; i <= max; i++) {
        totalSum += i;
    }
    
    return totalSum;
}

// =========================================================================
// APPROACH 2: MATHEMATICAL METHOD (GAUSS'S FORMULA)
// =========================================================================
/**
 * T-Diagram (Trace Table) for sumAllMathematical([1, 4]):
 * * * Initialized State:
 * min = 1 | max = 4
 * * * Mathematical Steps:
 * Step 1: Calculate numberOfItems = (max - min) + 1
 * numberOfItems = (4 - 1) + 1 = 4
 * * Step 2: Apply Arithmetic Progression Formula = (numberOfItems * (min + max)) / 2
 * Execution = (4 * (1 + 4)) / 2
 * Execution = (4 * 5) / 2
 * Execution = 20 / 2 = 10
 * * * Final Return Value: 10
 */
function sumAllMathematical(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    
    // Find how many numbers exist within this range inclusive
    const numberOfItems = (max - min) + 1;
    
    // Apply Gauss's arithmetic progression formula for O(1) execution
    return (numberOfItems * (min + max)) / 2;
}


// =========================================================================
// 🧪 TEST CASES & VERIFICATION
// =========================================================================
console.log("--- Executing Solution 1: Iterative Loop ---");
console.log("Test [1, 4]:  ", sumAllIterative([1, 4]));   // Expected: 10
console.log("Test [4, 1]:  ", sumAllIterative([4, 1]));   // Expected: 10
console.log("Test [5, 10]: ", sumAllIterative([5, 10]));  // Expected: 45

console.log("\n--- Executing Solution 2: Mathematical Gauss ---");
console.log("Test [1, 4]:  ", sumAllMathematical([1, 4]));   // Expected: 10
console.log("Test [4, 1]:  ", sumAllMathematical([4, 1]));   // Expected: 10
console.log("Test [5, 10]: ", sumAllMathematical([5, 10]));  // Expected: 45
console.log("Test [10, 5]: ", sumAllMathematical([10, 5]));  // Expected: 45