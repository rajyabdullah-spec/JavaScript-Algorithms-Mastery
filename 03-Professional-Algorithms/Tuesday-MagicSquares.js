/**
 * 📊 Tuesday: Magic Squares Algorithm
 * * Description:
 * A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, 
 * column, and major diagonal adds up to 15.
 * This script runs two distinct engineering paradigms to determine whether 
 * a given 1D grid array of length 9 represents a valid magic square.
 * * Example Input: [8, 1, 6, 3, 5, 7, 4, 9, 2] => Expected Output: true
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD
   ==========================================================================
   
   📊 STRUCTURAL T-DIAGRAM (Trace Table):
   Input Grid Array: [8, 1, 6, 3, 5, 7, 4, 9, 2]
   
   +------------------+------------------------------+-----------------+-----------------+
   | Variable / Check | Expression / Indices         | Operation       | Evaluated Sum   |
   +------------------+------------------------------+-----------------+-----------------+
   | row1             | grid[0] + grid[1] + grid[2]  | 8 + 1 + 6       | 15 (Valid)      |
   | row2             | grid[3] + grid[4] + grid[5]  | 3 + 5 + 7       | 15 (Valid)      |
   | row3             | grid[6] + grid[7] + grid[8]  | 4 + 9 + 2       | 15 (Valid)      |
   | col1             | grid[0] + grid[3] + grid[6]  | 8 + 3 + 4       | 15 (Valid)      |
   | col2             | grid[1] + grid[4] + grid[7]  | 1 + 5 + 9       | 15 (Valid)      |
   | col3             | grid[2] + grid[5] + grid[8]  | 6 + 7 + 2       | 15 (Valid)      |
   | diag1            | grid[0] + grid[4] + grid[8]  | 8 + 5 + 2       | 15 (Valid)      |
   | diag2            | grid[2] + grid[4] + grid[6]  | 6 + 5 + 4       | 15 (Valid)      |
   +------------------+------------------------------+-----------------+-----------------+
   | Final Return     | All structural sums === 15                     | true            |
   +------------------+------------------------------+-----------------+-----------------+
*/

function isMagicSquareStructural(grid) {
    // Structural index accumulation matrix
    const row1 = grid[0] + grid[1] + grid[2];
    const row2 = grid[3] + grid[4] + grid[5];
    const row3 = grid[6] + grid[7] + grid[8];

    const col1 = grid[0] + grid[3] + grid[6];
    const col2 = grid[1] + grid[4] + grid[7];
    const col3 = grid[2] + grid[5] + grid[8];

    const diag1 = grid[0] + grid[4] + grid[8];
    const diag2 = grid[2] + grid[4] + grid[6];

    return (row1 === 15 && row2 === 15 && row3 === 15 &&
            col1 === 15 && col2 === 15 && col3 === 15 &&
            diag1 === 15 && diag2 === 15);
}


/* ==========================================================================
   ⚡ PARADIGM 2: THE ITERATIVE FAST METHOD
   ==========================================================================
   
   📊 ITERATIVE LOOP TRACE TABLE:
   Input Grid Array: [8, 1, 6, 3, 5, 7, 4, 9, 2]
   
   +------+-------------------+-----------+----------------------------+---------------+--------+
   | Iter | winConditions[i]  | [a, b, c] | grid[a] + grid[b] + grid[c] | Calculation   | Sum===15|
   +------+-------------------+-----------+----------------------------+---------------+--------+
   | i=0  | [0, 1, 2]         | [0, 1, 2] | grid[0] + grid[1] + grid[2] | 8 + 1 + 6     | true   |
   | i=1  | [3, 4, 5]         | [3, 4, 5] | grid[3] + grid[4] + grid[5] | 3 + 5 + 7     | true   |
   | i=2  | [6, 7, 8]         | [6, 7, 8] | grid[6] + grid[7] + grid[8] | 4 + 9 + 2     | true   |
   | i=3  | [0, 3, 6]         | [0, 3, 6] | grid[0] + grid[3] + grid[6] | 8 + 3 + 4     | true   |
   | i=4  | [1, 4, 7]         | [1, 4, 7] | grid[1] + grid[4] + grid[7] | 1 + 5 + 9     | true   |
   | i=5  | [2, 5, 8]         | [2, 5, 8] | grid[2] + grid[5] + grid[8] | 6 + 7 + 2     | true   |
   | i=6  | [0, 4, 8]         | [0, 4, 8] | grid[0] + grid[4] + grid[8] | 8 + 5 + 2     | true   |
   | i=7  | [2, 4, 6]         | [2, 4, 6] | grid[2] + grid[4] + grid[6] | 6 + 5 + 4     | true   |
   +------+-------------------+-----------+----------------------------+---------------+--------+
   | Final Return     | Loop clears all verification boundaries safely         | true            |
   +------------------+--------------------------------------------------------+-----------------+
*/

function isMagicSquareIterative(grid) {
    // Linear multidimensional evaluation index combinations
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (grid[a] + grid[b] + grid[c] !== 15) {
            return false; 
        }
    }
    return true; 
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE
// ==========================================================================
const testCases = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2], // true
    [2, 7, 6, 9, 5, 1, 4, 3, 8], // true
    [3, 5, 7, 8, 1, 6, 4, 9, 2], // false
    [8, 1, 6, 7, 5, 3, 4, 9, 2]  // false
];

console.log("Executing Verification Pipeline...");
testCases.forEach((grid, idx) => {
    console.log(`Grid #${idx + 1} -> Structural: ${isMagicSquareStructural(grid)} | Iterative: ${isMagicSquareIterative(grid)}`);
});