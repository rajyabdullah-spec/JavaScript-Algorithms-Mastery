/**
 * 📊 Friday: Sum All Odd Fibonacci Numbers Algorithm
 * * Description:
 * Given a positive integer num, return the sum of all odd Fibonacci numbers 
 * that are less than or equal to num.
 * * Example Input: sumFibs(10) => Expected Output: 10 (1 + 1 + 3 + 5 = 10)
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (Student-Friendly Loop & Check)
   ==========================================================================
   
   📊 STRUCTURAL T-DIAGRAM (Trace Table):
   Input Number (num): 4
   
   +------------------+-----------------------+---------------+------------------+--------+
   | Loop Iteration   | Variable Check        | Evaluation    | Current Variables| Status |
   +------------------+-----------------------+---------------+------------------+--------+
   | Initialization   | Baseline setups       | N/A           | prev=0, curr=1   | Loaded |
   |                  |                       |               | sum=0            |        |
   | Cycle 1          | curr <= num (1 <= 4)  | true          | sum = 0 + 1 = 1  | Active |
   |                  | curr % 2 !== 0        | true (Odd)    | next = 0 + 1 = 1 |        |
   |                  | State Mutation        | Updates state | prev=1, curr=1   | Loop   |
   +------------------+-----------------------+---------------+------------------+--------+
   | Cycle 2          | curr <= num (1 <= 4)  | true          | sum = 1 + 1 = 2  | Active |
   |                  | curr % 2 !== 0        | true (Odd)    | next = 1 + 1 = 2 |        |
   |                  | State Mutation        | Updates state | prev=1, curr=2   | Loop   |
   +------------------+-----------------------+---------------+------------------+--------+
   | Cycle 3          | curr <= num (2 <= 4)  | true          | sum = 2 (No skip)| Skip   |
   |                  | curr % 2 !== 0        | false (Even)  | next = 1 + 2 = 3 |        |
   |                  | State Mutation        | Updates state | prev=2, curr=3   | Loop   |
   +------------------+-----------------------+---------------+------------------+--------+
   | Cycle 4          | curr <= num (3 <= 4)  | true          | sum = 2 + 3 = 5  | Active |
   |                  | curr % 2 !== 0        | true (Odd)    | next = 2 + 3 = 5 |        |
   |                  | State Mutation        | Updates state | prev=3, curr=5   | Loop   |
   +------------------+-----------------------+---------------+------------------+--------+
   | Cycle 5          | curr <= num (5 <= 4)  | false         | Loop Terminates  | End    |
   +------------------+-----------------------+---------------+------------------+--------+
   | Final Return     | Returns the fully accumulated sum value: 5                       |
   +------------------+--------------------------------------------------------------------+
*/

function sumFibs(num) {
    let prevNumber = 0;
    let currentNumber = 1;
    let sum = 0;

    while (currentNumber <= num) {
        
        if (currentNumber % 2 !== 0) {
            sum += currentNumber;
        }

        
        let nextNumber = prevNumber + currentNumber;
        prevNumber = currentNumber;
        currentNumber = nextNumber;
    }

    return sum;
}

/* ==========================================================================
   🏛️ PARADIGM 2: THE ADVANCED GENERATOR METHOD (Professional Single-Loop)
   ==========================================================================
   
   📊 ADVANCED T-DIAGRAM (Trace Table):
   Input Number (num): 10
   
   +------------------+-----------------------+---------------+------------------+--------+
   | Variable / Check | Expression / Evaluation                  | Current Value   | Status |
   +------------------+-----------------------------------------+-----------------+--------+
   | num              | Max threshold limit                     | 10              | Loaded |
   | [f1, f2]         | Destructuring state tuple [prev, curr]  | [1, 1]          | Init   |
   | Accumulation     | f2 % 2 !== 0 ? sum += f2                | 1 + 1 + 3 + 5   | Active |
   | Tuple Mutation   | [f1, f2] = [f2, f1 + f2]                | Swaps dynamically| Iter   |
   +------------------+-----------------------------------------+-----------------+--------+
   | Final Return     | Returns the clean inline accumulated expression evaluation: 10     |
   +------------------+--------------------------------------------------------------------+
*/

function sumFibsAdvanced(num) {
    let f1 = 0, f2 = 1, sum = 0;
    
    
    while (f2 <= num) {
        if (f2 % 2 !== 0) sum += f2;
        [f1, f2] = [f2, f1 + f2];
    }
    
    return sum;
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE
// ==========================================================================
const test1 = sumFibs(4);
console.log("Paradigm 1 Result (num = 4):", test1); 
// Expected Output: 5

const test2 = sumFibsAdvanced(10);
console.log("Paradigm 2 Result (num = 10):", test2); 
// Expected Output: 10