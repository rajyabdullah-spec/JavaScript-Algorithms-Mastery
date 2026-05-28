/**
 * 📊 Thursday: Sum All Primes Algorithm
 * * Reference File: Thursday-SumAllPrimes.js
 * * Description:
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, 
 * one and itself. The provided number may not be a prime.
 * * Example Input: sumPrimes(10) => Expected Output: 17 (2 + 3 + 5 + 7)
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (Linear Iterative Check)
   ==========================================================================
   
   📊 STRUCTURAL T-DIAGRAM (Trace Table):
   Target Limit (num): 10
   
   +------+-----------------+------------------------+-------------------+--------+
   | Step | Current Check (i)| isPrime Line Evaluation| Action Taken      | Sum    |
   +------+-----------------+------------------------+-------------------+--------+
   | 1    | i = 2           | Initial core prime     | Add to Sum (2)    | 2      |
   | 2    | i = 3           | No divisors found      | Add to Sum (3)    | 5      |
   | 3    | i = 4           | Divisible by 2 (4%2==0)| Skipped (Not Prime)| 5      |
   | 4    | i = 5           | No divisors found      | Add to Sum (5)    | 10     |
   | 5    | i = 6           | Divisible by 2 (6%2==0)| Skipped (Not Prime)| 10     |
   | 6    | i = 7           | No divisors found      | Add to Sum (7)    | 17     |
   | 7    | i = 8           | Divisible by 2 (8%2==0)| Skipped (Not Prime)| 17     |
   | 8    | i = 9           | Divisible by 3 (9%3==0)| Skipped (Not Prime)| 17     |
   | 9    | i = 10          | Divisible by 2 (10%2=0)| Skipped (Not Prime)| 17     |
   +------+-----------------+------------------------+-------------------+--------+
   | Final Return     | Accumulator terminates safely yielding 17              | 17     |
   +------------------+--------------------------------------------------------+--------+
*/

function isPrimeLinear(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrimeLinear(i)) {
            sum += i;
        }
    }
    return sum;
}

/* ==========================================================================
   🏛️ PARADIGM 2: THE OPTIMIZED ENGINEERING METHOD (Square Root Boundary Check)
   ==========================================================================
   
   📊 OTIMIZED T-DIAGRAM (Trace Table):
   Target Number to Evaluate for Prime Status: n = 9
   
   +------+-----------------+-------------------------+------------------+--------+
   | Step | Limit Boundary  | Evaluation Range Checked| Operation Status | Outcome|
   +------+-----------------+-------------------------+------------------+--------+
   | 1    | Math.sqrt(9) = 3| Loop checks up to 3 only| i = 2 -> 9%2 != 0| Passed |
   | 2    | Checking i = 3  | Matches upper boundary  | i = 3 -> 9%3 == 0| Failed |
   | 3    | Core Hit        | Found a factor early    | Returns false    | Break  |
   +------+-----------------+-------------------------+------------------+--------+
   | Performance Note | Avoided checking 4, 5, 6, 7, 8 completely due to root limit  |
   +------------------+-----------------------------------------------------------+--------+
*/

function isPrimeOptimized(n) {
    if (n <= 1) return false;
    const boundary = Math.sqrt(n);
    for (let i = 2; i <= boundary; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sumPrimesAdvanced(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrimeOptimized(i)) {
            sum += i;
        }
    }
    return sum;
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE
// ==========================================================================
console.log("Paradigm 1 Result (Limit 10):", sumPrimes(10)); 
console.log("Paradigm 2 Result (Limit 10):", sumPrimesAdvanced(10)); 
console.log("Paradigm 2 Performance Test (Limit 977):", sumPrimesAdvanced(977));