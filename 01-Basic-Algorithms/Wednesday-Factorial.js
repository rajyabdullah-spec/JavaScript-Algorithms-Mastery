/**
 * Wednesday: Factorialize!
 * Goal: Calculate the product of all positive integers up to n.
 * Rule: Ensure 0! equals 1. No recursive methods allowed.
 */
 * * T-Diagram for factorialize(5):
 * | Iteration | i | i <= 5 | result (calculation) | result (final value) |
 * |-----------|---|--------|----------------------|----------------------|
 * | Start     | - | -      | -                    | 1                    |
 * | 1         | 1 | True   | 1 * 1                | 1                    |
 * | 2         | 2 | True   | 1 * 2                | 2                    |
 * | 3         | 3 | True   | 2 * 3                | 6                    |
 * | 4         | 4 | True   | 6 * 4                | 24                   |
 * | 5         | 5 | True   | 24 * 5               | 120                  |
 * | End       | 6 | False  | Stop Loop            | 120                  |
 */

function factorialize(n) {
  // Initialize result to 1 (Multiplicative Identity)
  let result = 1;

  // Loop from 1 up to and including n
  for (let i = 1; i <= n; i++) {
    result *= i; // Equivalent to: result = result * i
  }

  return result;
}

// Test cases as required:
console.log("Factorial of 0:", factorialize(0));   // Expected: 1
console.log("Factorial of 10:", factorialize(10)); // Expected: 3628800
console.log("Factorial of 20:", factorialize(20)); // Expected: 2432902008176640000