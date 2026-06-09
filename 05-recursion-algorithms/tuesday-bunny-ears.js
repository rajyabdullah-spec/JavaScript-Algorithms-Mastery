/**
 * 📊 Tuesday: Bunny Ears Algorithm
 * * Section: Recursion Algorithms (Week 05)
 * * Description:
 * We have a number of bunnies and each bunny has two big floppy ears. Compute the total 
 * number of ears across all the bunnies recursively without using loops or multiplication.
 * * Mathematical Formula: Total Ears = 2 + 2 + 2 + ... (Repeated n times)
 * * Example Input: bunnyEars(3) => Expected Output: 6
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (iBunnyEars) - Iterative Addition
   ==========================================================================
   * Time Complexity: O(n) - Linear loop incrementing up to n.
   * Space Complexity: O(1) - Constant space, operates entirely within one frame.
   
   📊 ITERATIVE T-DIAGRAM (Trace Table):
   Input Bunnies (bunnies): 3 | totalEars accumulator = 0
   
   +-------------+-------------------+--------------------+------------------------+---------+
   | Loop Index  | Guard Check       | Operation          | Accumulator Changes    | Status  |
   +-------------+-------------------+--------------------+------------------------+---------+
   | Init        | N/A               | Baseline setup     | totalEars = 0          | Loaded  |
   | i = 1       | 1 <= 3 (True)     | totalEars += 2     | totalEars becomes 2    | Cycling |
   | i = 2       | 2 <= 3 (True)     | totalEars += 2     | totalEars becomes 4    | Cycling |
   | i = 3       | 3 <= 3 (True)     | totalEars += 2     | totalEars becomes 6    | Cycling |
   | i = 4       | 4 <= 3 (False)    | Loop Terminates    | totalEars stays 6      | End     |
   +-------------+-------------------+--------------------+------------------------+---------+
   | Final Return| Returns the aggregated structural addition result: 6                    |
   +---------------------------------------------------------------------------------------+
*/

function iBunnyEars(bunnies) {
    // Structural Input Validation & Data Sanitization
    if (bunnies < 0 || isNaN(bunnies)) return 0;

    let totalEars = 0;
    // Sequential structural incremental workflow
    for (let i = 1; i <= bunnies; i++) {
        totalEars += 2;
    }
    return totalEars;
}


/* ==========================================================================
   🚀 PARADIGM 2: THE RECURSIVE METHOD (rBunnyEars) - Call Stack Aggregation
   ==========================================================================
   * Time Complexity: O(n) - Requires n recursive linear function call executions.
   * Space Complexity: O(n) - Pushes n execution stack frames onto the memory environment.
   
   📊 RECURSIVE CALL STACK FLOW & UNWINDING DIAGRAM:
   Input Bunnies (bunnies): 2
   
   [Phase 1: Winding the Stack (Going Down)]
   rBunnyEars(2) ---> Requires 2 + rBunnyEars(1)  (Suspended, waiting...)
     rBunnyEars(1) ---> Requires 2 + rBunnyEars(0)  (Suspended, waiting...)
       rBunnyEars(0) ---> Base Case reached! Returns 0 immediately.
       
   [Phase 2: Unwinding the Stack (Going Up & Evaluating)]
       rBunnyEars(0) returns 0
     rBunnyEars(1) returns 2 + 0 = 2
   rBunnyEars(2) returns 2 + 2 = 4
   
   +------------------+-----------------+-----------------------+---------------------+
   | Execution Frame  | Frame Parameter | Conditional Check     | Action / Return     |
   +------------------+-----------------+-----------------------+---------------------+
   | Frame #1         | bunnies = 2     | 2 === 0 (False)       | return 2 + rBun(1)  |
   | Frame #2         | bunnies = 1     | 1 === 0 (False)       | return 2 + rBun(0)  |
   | Frame #3 (Top)   | bunnies = 0     | 0 === 0 (True Base)   | return 0            |
   +------------------+-----------------+-----------------------+---------------------+
*/

function rBunnyEars(bunnies) {
    // Guard Clause: Handle negative bounds gracefully
    if (bunnies < 0 || isNaN(bunnies)) return 0;
    
    // Base Case Layer: Halts infinite execution when count hits zero
    if (bunnies === 0) {
        return 0;
    }
    
    // Recursive Case Layer: Aggregates current ears with downscaled sub-frame returns
    return 2 + rBunnyEars(bunnies - 1);
}


// ==========================================================================
// 🌐 RUNTIME RUNNER & DATA SANITIZATION INTERFACE
// ==========================================================================

// Environment check logic to safe guard Node.js terminal testing executions
let sanitizedBunnies = 2; 

if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
    const userInput = prompt("Enter the number of bunnies to count their floppy ears:");
    sanitizedBunnies = parseInt(userInput, 10);
}

if (isNaN(sanitizedBunnies) || sanitizedBunnies < 0) {
    console.error("❌ Critical: Input must be a valid non-negative integer.");
} else {
    console.log(`========== 🧠 Bunny Ears Sprint: Week 05 ==========`);
    console.log(`🔢 Target Input Variable: ${sanitizedBunnies}`);
    console.log(`🏛️ Paradigm 1 (Iterative) Result: ${iBunnyEars(sanitizedBunnies)}`);
    console.log(`🚀 Paradigm 2 (Recursive) Result: ${rBunnyEars(sanitizedBunnies)}`);
    console.log(`==================================================`);
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE (Automated Console Verifications)
// ==========================================================================
const testCases = [0, 1, 2, 5, 10];

console.log("\n🔬 Automated Test Suite Logs:");
testCases.forEach(test => {
    const iter = iBunnyEars(test);
    const rec = rBunnyEars(test);
    console.log(`[Test bunnies=${test}] -> Iterative: ${iter} | Recursive: ${rec} | Match: ${iter === rec ? "✅ PASSED" : "❌ FAILED"}`);
});