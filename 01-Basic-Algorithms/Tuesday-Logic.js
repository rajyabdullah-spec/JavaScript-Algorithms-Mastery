/**
 * Tuesday: Basic JS Algorithms (Fibonacci & FizzBuzz)
 * Goal: Practice advanced logic patterns and sequence generation.
 * Rules: Implement manual iteration and logical branching.
 */

// ============================================================
// 1. Addition (200 - 2700)
// ============================================================
/* Logic: Sum numbers divisible by 3 or 5, but not both.
   T-Diagram:
   i    | i % 3 | i % 5 | Condition (XOR) | Sum
   -----|-------|-------|-----------------|------
   200  | 2     | 0     | True            | 200
   201  | 0     | 1     | True            | 401
   210  | 0     | 0     | False           | 401
*/
let sumDivisible = 0;
for (let i = 200; i <= 2700; i++) {
    let div3 = (i % 3 === 0);
    let div5 = (i % 5 === 0);
    if ((div3 || div5) && !(div3 && div5)) {
        sumDivisible += i;
    }
}
console.log("Task 1 Sum:", sumDivisible);

// ============================================================
// 2. Shift the Values (Reverse Order)
// ============================================================
/* Logic: Create a new array by reading the original one backwards.
   T-Diagram (X = [2,1,6,4,-7]):
   i (Index) | X[i] | NewArray
   ----------|------|----------
   4         | -7   | [-7]
   3         | 4    | [-7, 4]
   ...       | ...  | [-7, 4, 6, 1, 2]
*/
let X2 = [2, 1, 6, 4, -7];
let shiftedX = [];
for (let i = X2.length - 1; i >= 0; i--) {
    shiftedX.push(X2[i]);
}
console.log("Task 2 Shifted:", shiftedX);

// ============================================================
// 3. FizzBuzz (1 - 135)
// ============================================================
/* Logic: Standard FizzBuzz pattern stored in an array.
*/
let fizzBuzzArray = [];
for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
        fizzBuzzArray.push('Fizz');
    } else if (i % 5 === 0) {
        fizzBuzzArray.push('Buzz');
    } else {
        fizzBuzzArray.push(i);
    }
}
console.log("Task 3 FizzBuzz:", fizzBuzzArray);

// ============================================================
// 4. Fibonacci (Sum below 1,000,000)
// ============================================================
/* Logic: Fibonacci sequence using a while loop.
*/
let fibSum = 1; 
let a = 0;
let b = 1;
let currentFib = a + b;

while (currentFib < 1000000) {
    fibSum += currentFib;
    a = b;
    b = currentFib;
    currentFib = a + b;
}
console.log("Task 4 Fibonacci Sum:", fibSum);

// ============================================================
// 5. Remove the Negative
// ============================================================
/* Logic: Filter out negatives by only pushing positives to a new array.
*/
let X5 = [1, -2, 4, 1];
let noNegatives = [];
for (let i = 0; i < X5.length; i++) {
    if (X5[i] >= 0) {
        noNegatives.push(X5[i]);
    }
}
console.log("Task 5 Cleaned:", noNegatives);

// ============================================================
// 6. Communist Censorship
// ============================================================
/* Logic: Nested loop to generate stars based on word length.
*/
let X6 = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
let target = 'Program';

for (let i = 0; i < X6.length; i++) {
    if (X6[i] === target) {
        let stars = '';
        for (let j = 0; j < target.length; j++) {
            stars += '*';
        }
        X6[i] = stars;
    }
}
console.log("Task 6 Censored:", X6);