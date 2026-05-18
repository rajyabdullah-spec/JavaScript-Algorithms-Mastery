/* Algorithm: Largest Number in Arrays
   Goal: Return an array consisting of the largest number from each provided sub-array.
   Constraint: Handle standard nested loops and track maximum values dynamically.
   Date: Monday, May 18, 2026
*/

function largestOfFour(arr) {
    let results = [];

    /* T-Diagram / Trace Table
       Example: arr = [[4, 5], [13, 27]]
       
       | i | subArray  | j | current | max  | results    | Action
       |---|-----------|---|---------|------|------------|---------------------------------
       | - |     -     | - |    -    |  -   | []         | Initial State
       | 0 | [4, 5]    | - |    -    |  4   | []         | Reset max to subArray[0]
       | 0 | [4, 5]    | 1 |    5    |  5   | []         | 5 > 4 -> update max to 5
       | - |     -     | - |    -    |  -   | [5]        | Outer loop i=0 ends -> push max
       | 1 | [13, 27]  | - |    -    |  13  | [5]        | Reset max to subArray[0]
       | 1 | [13, 27]  | 1 |    27   |  27  | [5]        | 27 > 13 -> update max to 27
       | - |     -     | - |    -    |  -   | [5, 27]    | Outer loop i=1 ends -> push max
    */

    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        let max = subArray[0]; // Assume the first number is the largest initially

        for (let j = 1; j < subArray.length; j++) {
            if (subArray[j] > max) {
                max = subArray[j]; // Update max if a larger number is found
            }
        }
        
        results.push(max); // Save the largest number of the current sub-array
    }

    return results;
}

// Test Case
const inputData = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(inputData)); // Output: [5, 27, 39, 1001]