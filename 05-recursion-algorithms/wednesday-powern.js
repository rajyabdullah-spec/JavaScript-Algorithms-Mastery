/**
 * 📊 Wednesday: Power N Algorithm
 * * Section: Recursion Algorithms (Week 05)
 * * Description:
 * Given base and n (exponent) that are both 1 or more, compute the value 
 * of base to the n power recursively without using loops.
 * * Mathematical Formula: Total Power = base * base * base * ... (Repeated n times)
 * * Example Input: powerN(3, 2) => Expected Output: 9
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (iPowerN) - Iterative Multiplication
   ==========================================================================
   * Time Complexity: O(n) - Linear loop multiplying up to exponent n.
   * Space Complexity: O(1) - Constant space, executes within a single frame.
   
   📊 ITERATIVE T-DIAGRAM (Trace Table):
   Input Base (base): 3 | Input Exponent (exponent): 3 | result accumulator = 1
   
   +-------------+-------------------+--------------------+------------------------+---------+
   | Loop Index  | Guard Check       | Operation          | Accumulator Changes    | Status  |
   +-------------+-------------------+--------------------+------------------------+---------+
   | Init        | N/A               | Baseline setup     | result = 1             | Loaded  |
   | i = 0       | 0 < 3 (True)      | result *= 3        | result becomes 3       | Cycling |
   | i = 1       | 1 < 3 (True)      | result *= 3        | result becomes 9       | Cycling |
   | i = 2       | 2 < 3 (True)      | result *= 3        | result becomes 27      | Cycling |
   | i = 3       | 3 < 3 (False)     | Loop Terminates    | result stays 27        | End     |
   +-------------+-------------------+--------------------+------------------------+---------+
   | Final Return| Returns the accumulated sequential multiplication result: 27            |
   +---------------------------------------------------------------------------------------+
*/

function iPowerN(base, exponent) {
    // Structural Input Validation & Data Sanitization
    if (base < 1 || exponent < 1 || isNaN(base) || isNaN(exponent)) return 0;

    let result = 1;
    // Sequential structural incremental loop
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}


/* ==========================================================================
   🚀 PARADIGM 2: THE RECURSIVE METHOD (rPowerN) - Call Stack Aggregation
   ==========================================================================
   * Time Complexity: O(n) - Requires n recursive linear function call executions.
   * Space Complexity: O(n) - Pushes n execution stack frames onto the environment.
   
   📊 RECURSIVE CALL STACK FLOW & UNWINDING DIAGRAM:
   Input Base (base): 3 | Input Exponent (exponent): 3
   
   [Phase 1: Winding the Stack (Going Down)]
   rPowerN(3, 3) ---> Requires 3 * rPowerN(3, 2)  (Suspended, waiting...)
     rPowerN(3, 2) ---> Requires 3 * rPowerN(3, 1)  (Suspended, waiting...)
       rPowerN(3, 1) ---> Requires 3 * rPowerN(3, 0)  (Suspended, waiting...)
         rPowerN(3, 0) ---> Base Case reached! Returns 1 immediately.
       
   [Phase 2: Unwinding the Stack (Going Up & Evaluating)]
         rPowerN(3, 0) returns 1
       rPowerN(3, 1) returns 3 * 1 = 3
     rPowerN(3, 2) returns 3 * 3 = 9
   rPowerN(3, 3) returns 3 * 9 = 27
   
   +------------------+-----------------+-----------------------+---------------------+
   | Execution Frame  | Frame Parameter | Conditional Check     | Action / Return     |
   +------------------+-----------------+-----------------------+---------------------+
   | Frame #1         | exponent = 3    | 3 === 0 (False)       | return 3 * rPow(3,2)|
   | Frame #2         | exponent = 2    | 2 === 0 (False)       | return 3 * rPow(3,1)|
   | Frame #3         | exponent = 1    | 1 === 0 (False)       | return 3 * rPow(3,0)|
   | Frame #4 (Top)   | exponent = 0    | 0 === 0 (True Base)   | return 1            |
   +------------------+-----------------+-----------------------+---------------------+
*/

function rPowerN(base, exponent) {
    // Guard Clause: Handle invalid bounds gracefully
    if (base < 1 || exponent < 0 || isNaN(base) || isNaN(exponent)) return 0;
    
    // Base Case Layer: Halts infinite execution when exponent hits zero
    if (exponent === 0) {
        return 1;
    }
    
    // Recursive Case Layer: Multiplies base by the downscaled sub-frame returns
    return base * rPowerN(base, exponent - 1);
}


// ==========================================================================
// 🌐 RUNTIME RUNNER & DATA SANITIZATION INTERFACE
// ==========================================================================

// Environment check logic to safe guard Node.js terminal testing executions
let sanitizedBase = 3;
let sanitizedExponent = 2; 

if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
    const inputBase = prompt("Enter the base number:");
    const inputExp = prompt("Enter the exponent number:");
    sanitizedBase = parseInt(inputBase, 10);
    sanitizedExponent = parseInt(inputExp, 10);
}

if (isNaN(sanitizedBase) || isNaN(sanitizedExponent) || sanitizedBase < 1 || sanitizedExponent < 0) {
    console.error("❌ Critical: Inputs must be valid positive integers.");
} else {
    console.log(`========== 🧠 Power N Sprint: Week 05 ==========`);
    console.log(`🔢 Target Variables: Base=${sanitizedBase} | Exponent=${sanitizedExponent}`);
    console.log(`🏛️ Paradigm 1 (Iterative) Result: ${iPowerN(sanitizedBase, sanitizedExponent)}`);
    console.log(`🚀 Paradigm 2 (Recursive) Result: ${rPowerN(sanitizedBase, sanitizedExponent)}`);
    console.log(`==================================================`);
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE (Automated Console Verifications)
// ==========================================================================
console.log("\n🔬 Automated Test Suite Logs:");

const runTest = (b, e) => {
    const iter = iPowerN(b, e);
    const rec = rPowerN(b, e);
    console.log(`[Test powerN(${b}, ${e})] -> Iterative: ${iter} | Recursive: ${rec} | Match: ${iter === rec ? "✅ PASSED" : "❌ FAILED"}`);
};

runTest(3, 1); // Expected: 3
runTest(3, 2); // Expected: 9
runTest(3, 3); // Expected: 27