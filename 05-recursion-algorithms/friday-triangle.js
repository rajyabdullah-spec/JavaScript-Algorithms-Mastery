/**
 * 📊 Friday: Recursive Triangle Blocks Algorithm
 * * Section: Recursion Algorithms (Week 05)
 * * Description:
 * We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, 
 * the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) 
 * the total number of blocks in such a triangle with the given number of rows.
 * * Mathematical Formula: Total Blocks = rows + (rows - 1) + (rows - 2) + ... + 0
 * * Example Input: rTriangle(2) => Expected Output: 3
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (iTriangle) - Iterative Addition
   ==========================================================================
   * Time Complexity: O(n) - Linear loop incrementing and summing up to n.
   * Space Complexity: O(1) - Constant space, operates entirely within one frame.
   
   📊 ITERATIVE T-DIAGRAM (Trace Table):
   Input Rows (rows): 2 | totalBlocks accumulator = 0
   
   +-------------+-------------------+--------------------+------------------------+---------+
   | Loop Index  | Guard Check       | Operation          | Accumulator Changes    | Status  |
   +-------------+-------------------+--------------------+------------------------+---------+
   | Init        | N/A               | Baseline setup     | totalBlocks = 0        | Loaded  |
   | i = 1       | 1 <= 2 (True)     | totalBlocks += 1   | totalBlocks becomes 1  | Cycling |
   | i = 2       | 2 <= 2 (True)     | totalBlocks += 2   | totalBlocks becomes 3  | Cycling |
   | i = 3       | 3 <= 2 (False)    | Loop Terminates    | totalBlocks stays 3    | End     |
   +-------------+-------------------+--------------------+------------------------+---------+
   | Final Return| Returns the aggregated structural addition result: 3                    |
   +---------------------------------------------------------------------------------------+
*/

function iTriangle(rows) {
    // Structural Input Validation & Data Sanitization
    if (rows < 0 || isNaN(rows)) return 0;

    let totalBlocks = 0;
    // Sequential structural incremental workflow
    for (let i = 1; i <= rows; i++) {
        totalBlocks += i;
    }
    return totalBlocks;
}


/* ==========================================================================
   🚀 PARADIGM 2: THE RECURSIVE METHOD (rTriangle) - Call Stack Aggregation
   ==========================================================================
   * Time Complexity: O(n) - Requires n recursive linear function call executions.
   * Space Complexity: O(n) - Pushes n execution stack frames onto the memory environment.
   
   📊 RECURSIVE CALL STACK FLOW & UNWINDING DIAGRAM:
   Input Rows (rows): 2
   
   [Phase 1: Winding the Stack (Going Down)]
   rTriangle(2) ---> Requires 2 + rTriangle(1)  (Suspended, waiting...)
     rTriangle(1) ---> Requires 1 + rTriangle(0)  (Suspended, waiting...)
       rTriangle(0) ---> Base Case reached! Returns 0 immediately.
       
   [Phase 2: Unwinding the Stack (Going Up & Evaluating)]
       rTriangle(0) returns 0
     rTriangle(1) returns 1 + 0 = 1
   rTriangle(2) returns 2 + 1 = 3
   
   +------------------+-----------------+-----------------------+---------------------+
   | Execution Frame  | Frame Parameter | Conditional Check     | Action / Return     |
   +------------------+-----------------+-----------------------+---------------------+
   | Frame #1         | rows = 2        | 2 === 0 (False)       | return 2 + rTri(1)  |
   | Frame #2         | rows = 1        | 1 === 0 (False)       | return 1 + rTri(0)  |
   | Frame #3 (Top)   | rows = 0        | 0 === 0 (True Base)   | return 0            |
   +------------------+-----------------+-----------------------+---------------------+
*/

function rTriangle(rows) {
    // Guard Clause: Handle negative bounds gracefully
    if (rows < 0 || isNaN(rows)) return 0;
    
    // Base Case Layer: Halts infinite execution when row count hits zero
    if (rows === 0) {
        return 0;
    }
    
    // Recursive Case Layer: Aggregates current row blocks with downscaled sub-frame returns
    return rows + rTriangle(rows - 1);
}


// ==========================================================================
// 🌐 RUNTIME RUNNER & DATA SANITIZATION INTERFACE
// ==========================================================================

// Environment check logic to safe guard Node.js terminal testing executions
let sanitizedRows = 2; 

if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
    const userInput = prompt("Enter the number of rows in the triangle:");
    sanitizedRows = parseInt(userInput, 10);
}

if (isNaN(sanitizedRows) || sanitizedRows < 0) {
    console.error("❌ Critical: Input must be a valid non-negative integer.");
} else {
    console.log(`========== 🧠 Triangle Blocks Sprint: Week 05 ==========`);
    console.log(`🔢 Target Input Variable: rows = ${sanitizedRows}`);
    console.log(`🏛️ Paradigm 1 (Iterative) Result: ${iTriangle(sanitizedRows)}`);
    console.log(`🚀 Paradigm 2 (Recursive) Result: ${rTriangle(sanitizedRows)}`);
    console.log(`========================================================`);
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE (Automated Console Verifications)
// ==========================================================================
console.log("\n🔬 Automated Test Suite Logs:");

const runTriangleTest = (testRows) => {
    const iter = iTriangle(testRows);
    const rec = rTriangle(testRows);
    console.log(`[Test rows=${testRows}] -> Iterative: ${iter} | Recursive: ${rec} | Match: ${iter === rec ? "✅ PASSED" : "❌ FAILED"}`);
};

runTriangleTest(0); // Expected: 0
runTriangleTest(1); // Expected: 1
runTriangleTest(2); // Expected: 3
runTriangleTest(3); // Expected: 6
runTriangleTest(4); // Expected: 10