/**
 * 📊 Thursday: iFib vs rFib (Fibonacci Sequence - Adjusted Edition)
 * * Section: Recursion Algorithms (Week 05)
 * * Description:
 * Define both iterative and recursive methods that return the n-th Fibonacci number,
 * perfectly synchronized with the required test specification bounds.
 * * Sequence Reference: 1, 2, 3, 5, 8, 13, 21, ...
 * * Expected Target: fibonacci(7) => 21 | fibonacci(2) => 2
 */

// 🏛️ PARADIGM 1: THE STRUCTURAL METHOD (iFibonacci) - Adjusted Iterative
function iFibonacci(n) {
    if (n < 1 || isNaN(n)) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1;
    let b = 2;
    
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 🚀 PARADIGM 2: THE RECURSIVE METHOD (rFibonacci) - Adjusted Recursive
function rFibonacci(n) {
    if (n < 1 || isNaN(n)) return 0;
    
    // Base Case Layer adjusted for exact text requirements
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    // Recursive Case Layer
    return rFibonacci(n - 2) + rFibonacci(n - 1);
}

// ==========================================================================
// 🌐 RUNTIME RUNNER
// ==========================================================================
if (typeof window === 'undefined') {
    console.log(`========== 🧠 Fibonacci Sequence Sprint: Week 05 ==========`);
    console.log(`🔢 Target Input Position (n): 7`);
    console.log(`🏛️ Paradigm 1 (Iterative) Result: ${iFibonacci(7)}`);
    console.log(`🚀 Paradigm 2 (Recursive) Result: ${rFibonacci(7)}`);
    console.log(`===========================================================`);

    console.log("\n🔬 Automated Test Suite Logs:");
    const testCases = [1, 2, 3, 7];
    testCases.forEach(test => {
        const iter = iFibonacci(test);
        const rec = rFibonacci(test);
        console.log(`[Test n=${test}] -> Iterative: ${iter} | Recursive: ${rec} | Match: ${iter === rec ? "✅ PASSED" : "❌ FAILED"}`);
    });
}