/**
 * Friday: 3rd Highest Number in Array
 * Goal: Find the third-largest value in a single pass.
 * Constraint: Maximum efficiency (O(n)) using only one iteration.
 */

function thirdHighest(input) {
    // Initializing with the lowest possible values
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    /* T-Diagram / Trace Table
      Example: input = [2, 5, 3, 1, 4]

      | i | current | first | second | third | Action
      |---|---------|-------|--------|-------|---------------------------------
      | - |    -    | -Inf  | -Inf   | -Inf  | Initial State
      | 0 |    2    |   2   | -Inf   | -Inf  | 2 > first -> shift all down
      | 1 |    5    |   5   |   2    | -Inf  | 5 > first -> shift all down
      | 2 |    3    |   5   |   3    |   2   | 3 > second -> shift second & third
      | 3 |    1    |   5   |   3    |   2   | 1 < all -> no change
      | 4 |    4    |   5   |   4    |   3   | 4 > second -> shift second & third
    */

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (current > first) {
            third = second;
            second = first;
            first = current;
        } 
        else if (current > second && current !== first) {
            third = second;
            second = current;
        } 
        else if (current > third && current !== second && current !== first) {
            third = current;
        }
    }

    return third;
}

// Test Case
const testArray = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
console.log("The 3rd highest number is:", thirdHighest(testArray)); // Output: 11