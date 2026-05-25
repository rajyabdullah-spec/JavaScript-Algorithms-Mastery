/**
 * Friday Assignment: Fibonacci Sequence (n-th Term)
 * --------------------------------------------------
 * Location: JavaScript-Algorithms-Mastery / 02-Intermediate-Algorithms
 * * T-Diagram (Trace Table) for fibonacci(4):
 * * Initialized State:
 * prev = 1 | current = 1
 * * Loop Progression:
 * | Iteration (i) | Condition (i <= n) | nextNum = prev + current | New prev | New current |
 * |---------------|--------------------|--------------------------|----------|-------------|
 * |    Initial    | -------            | --------                 |    1     |      1      |
 * |       3       |   3 <= 4 (True)    | 1 + 1 = 2                |    1     |      2      |
 * |       4       |   4 <= 4 (True)    | 1 + 2 = 3                |    2     |      3      |
 * |       5       |   5 <= 4 (False)   | Loop Terminates          |   ---    |     ---     |
 * * Final Return Value: 3
 */

function fibonacci(n) {
    // Edge cases for the first two terms of the sequence
    if (n === 1 || n === 2) {
        return 1;
    }

    let prev = 1;
    let current = 1;

    // Iterative approach with O(n) Time Complexity and O(1) Space Complexity
    for (let i = 3; i <= n; i++) {
        let nextNum = prev + current;
        prev = current;
        current = nextNum;
    }

    return current;
}

// === Verification Test Cases ===
console.log(fibonacci(4));   // Output: 3
console.log(fibonacci(7));   // Output: 13
console.log(fibonacci(43));  // Output: 433494437
console.log(fibonacci(101)); // Output: 5.731478440138172e+20