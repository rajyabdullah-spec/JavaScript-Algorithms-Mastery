/**
 * 📊 Monday: rFactorial vs iFactorial Algorithm
 * * Section: Recursion Algorithms (Week 05)
 * * Description:
 * Calculate the factorial of a given non-negative integer using two distinct computer science 
 * methodologies: Iterative (using standard loops) and Recursive (using functions that call themselves).
 * * Mathematical Formula: n! = n * (n - 1) * (n - 2) * ... * 1
 * * Example Input: factorial(4) => Expected Output: 24
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (iFactorial) - Structural Loop
   ==========================================================================
   * Time Complexity: O(n) - Linear scan from 1 to n.
   * Space Complexity: O(1) - Constant space, executes within a single stack frame.
   
   📊 ITERATIVE T-DIAGRAM (Trace Table):
   Input Array (arr): [5, 3, 8, 2] | len = 4
   
   +-------------+-------------+------------------+-----------------------+---------+
   | Loop Index  | Guard Check | Operation        | Result State Changes  | Status  |
   +-------------+-------------+------------------+-----------------------+---------+
   | Init        | N/A         | Baseline setup   | result = 1            | Loaded  |
   | k = 4       | 4 > 1 (T)   | result *= 4      | result becomes 4      | Cycling |
   | k = 3       | 3 > 1 (T)   | result *= 3      | result becomes 12     | Cycling |
   | k = 2       | 2 > 1 (T)   | result *= 2      | result becomes 24     | Cycling |
   | k = 1       | 1 > 1 (F)   | Loop Terminates  | result stays 24       | End     |
   +-------------+-------------+------------------+-----------------------+---------+
   | Final Return| Returns the accumulated structural product: 24                 |
   +--------------------------------------------------------------------------------+
*/

function iFactorial(n) {
    // Structural Input Validation & Data Sanitization
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1;

    let result = 1;
    // Downward linear looping framework
    for (let k = n; k > 1; k--) {
        result *= k;
    }
    return result;
}


/* ==========================================================================
   🚀 PARADIGM 2: THE RECURSIVE METHOD (rFactorial) - Call Stack Optimization
   ==========================================================================
   * Time Complexity: O(n) - Requires n recursive function invocations.
   * Space Complexity: O(n) - Pushes n temporary execution frames onto the system Call Stack.
   
   📊 RECURSIVE CALL STACK FLOW & UNWINDING DIAGRAM:
   Input Number (n): 3
   
   [Phase 1: Winding the Stack (Going Down)]
   rFactorial(3) ---> Requires 3 * rFactorial(2)  (Suspended, waiting...)
     rFactorial(2) ---> Requires 2 * rFactorial(1)  (Suspended, waiting...)
       rFactorial(1) ---> Base Case reached! Returns 1 immediately.
       
   [Phase 2: Unwinding the Stack (Going Up & Evaluating)]
       rFactorial(1) returns 1
     rFactorial(2) returns 2 * 1 = 2
   rFactorial(3) returns 3 * 2 = 6
   
   +------------------+-----------------+-----------------------+---------------------+
   | Execution Frame  | Frame Parameter | Conditional Check     | Action / Return     |
   +------------------+-----------------+-----------------------+---------------------+
   | Frame #1         | n = 3           | 3 === 0 || 3 === 1 (F)| return 3 * rFac(2)  |
   | Frame #2         | n = 2           | 2 === 0 || 2 === 1 (F)| return 2 * rFac(1)  |
   | Frame #3 (Top)   | n = 1           | 1 === 1 (True Base)   | return 1            |
   +------------------+-----------------+-----------------------+---------------------+
*/

function rFactorial(n) {
    // Guard Clause: Handle negative bounds gracefully
    if (n < 0) return undefined;
    
    // Base Case Layer: Halts infinite execution and prevents Stack Overflow
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive Case Layer: Invokes functional abstraction with decremented bounds
    return n * rFactorial(n - 1);
}


// ==========================================================================
// 🌐 RUNTIME RUNNER & DATA SANITIZATION INTERFACE
// ==========================================================================

let sanitizedNum = 5;

if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
    const userInput = prompt("What number do you want to find the factorial of?");
    sanitizedNum = parseInt(userInput, 10);
}

if (isNaN(sanitizedNum) || sanitizedNum < 0) {
    console.error("❌ Critical: Input must be a valid non-negative integer.");
} else {
    console.log(`========== 🧠 Recursion Sprint: Week 05 ==========`);
    console.log(`🔢 Target Input Variable: ${sanitizedNum}`);
    console.log(`🏛️ Paradigm 1 (Iterative) Result: ${iFactorial(sanitizedNum)}`);
    console.log(`🚀 Paradigm 2 (Recursive) Result: ${rFactorial(sanitizedNum)}`);
    console.log(`==================================================`);
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE (Automated Console Verifications)
// ==========================================================================
const testCases = [0, 1, 5, 7];

console.log("\n🔬 Automated Test Suite Logs:");
testCases.forEach(test => {
    const iter = iFactorial(test);
    const rec = rFactorial(test);
    console.log(`[Test n=${test}] -> Iterative: ${iter} | Recursive: ${rec} | Match: ${iter === rec ? "✅ PASSED" : "❌ FAILED"}`);
});