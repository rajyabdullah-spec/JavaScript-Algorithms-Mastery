/**
 * Monday Assignment: Game of 3s
 * --------------------------------------------------
 * Location: JavaScript-Algorithms-Mastery / Professional Algorithms
 * * T-Diagram (Trace Table) for gameOfThree(100):
 * * Initialized State: n = 100
 * * Loop Progression:
 * | Iteration | Loop Condition (n > 1) | n % 3 | Action (Add/Sub) | Console Output | Next n Value       |
 * |-----------|------------------------|-------|------------------|----------------|--------------------|
 * |    1st    |     100 > 1 (True)     |   1   | Subtract 1 (-1)  | "100 -1"       | (100 - 1) / 3 = 33 |
 * |    2nd    |      33 > 1 (True)     |   0   | Divide only (0)  | "33 0"         | 33 / 3 = 11        |
 * |    3rd    |      11 > 1 (True)     |   2   | Add 1 (1)        | "11 1"         | (11 + 1) / 3 = 4   |
 * |    4th    |       4 > 1 (True)     |   1   | Subtract 1 (-1)  | "4 -1"         | (4 - 1) / 3 = 1    |
 * |    5th    |       1 > 1 (False)    |  ---  | Loop Terminates  | ------         | ------------------ |
 * * Post-Loop Execution: Console Output "1"
 */

function gameOfThree(n) {
    // Loop until we collapse the number down to 1
    while (n > 1) {
        if (n % 3 === 0) {
            console.log(n + " 0");
            n = n / 3;
        } else if (n % 3 === 1) {
            console.log(n + " -1");
            n = (n - 1) / 3;
        } else {
            console.log(n + " 1");
            n = (n + 1) / 3;
        }
    }

    // The final line must simply be 1
    console.log(1);
}

// === Verification Test Case ===
gameOfThree(100);