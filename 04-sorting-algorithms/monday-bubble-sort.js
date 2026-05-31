/**
 * 📊 Monday: Bubble Sort Algorithm
 * * Section: Sorting Algorithms (Week 04)
 * * Description:
 * Sort an array of numbers in ascending order by comparing adjacent elements 
 * and swapping them if they are in the wrong order. This repeats until the array is sorted.
 * * Example Input: bubbleSort([5, 1, 4, 3]) => Expected Output: [1, 3, 4, 5]
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (Traditional Nested Loops & Temp Variable)
   ==========================================================================
   
   📊 STRUCTURAL T-DIAGRAM (Trace Table):
   Input Array (arr): [5, 1, 4, 3] | len = 4
   
   +-------------+-------------+-----------------+------------+------------------+--------+
   | Outer Loop  | Inner Loop  | Comparison      | Evaluation | Array State      | Status |
   +-------------+-------------+-----------------+------------+------------------+--------+
   | Init        | N/A         | Baseline setup  | N/A        | [5, 1, 4, 3]     | Loaded |
   | i = 3       | j = 1       | arr[0] > arr[1] | 5 > 1 (T)  | Swap! [1, 5, 4, 3]| Active |
   | i = 3       | j = 2       | arr[1] > arr[2] | 5 > 4 (T)  | Swap! [1, 4, 5, 3]| Active |
   | i = 3       | j = 3       | arr[2] > arr[3] | 5 > 3 (T)  | Swap! [1, 4, 3, 5]| End i=3|
   |             |             |                 |            | (Largest '5' set)|        |
   +-------------+-------------+-----------------+------------+------------------+--------+
   | i = 2       | j = 1       | arr[0] > arr[1] | 1 > 4 (F)  | No Swap [1, 4, 3, 5] Skip  |
   | i = 2       | j = 2       | arr[1] > arr[2] | 4 > 3 (T)  | Swap! [1, 3, 4, 5]| End i=2|
   |             |             |                 |            | ('4' is set)     |        |
   +-------------+-------------+-----------------+------------+------------------+--------+
   | i = 1       | j = 1       | arr[0] > arr[1] | 1 > 3 (F)  | No Swap [1, 3, 4, 5] Skip  |
   | i = 0       | Loops end   | i >= 0 broken   | False      | [1, 3, 4, 5]     | Sorted |
   +-------------+-------------+-----------------+------------+------------------+--------+
   | Final Return| Returns the fully sorted array: [1, 3, 4, 5]                             |
   +-----------------------------------------------------------------------------------------+
*/

function bubbleSort(arr) {
    let len = arr.length;
    

    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

/* ==========================================================================
   🏛️ PARADIGM 2: THE ADVANCED METHOD (ES6+ Array Destructuring & Optimized Flag)
   ==========================================================================
   
   📊 ADVANCED T-DIAGRAM (Trace Table):
   Input Array (arr): [1, 2, 4, 3] | len = 4 (شبه مرتبة لاختبار ذكاء العلم swapped)
   
   +------------+------------+---------------+------------+------------------+---------+
   | Outer Loop | Inner Loop | Swapped Flag  | Evaluation | Array State      | Status  |
   +------------+------------+---------------+------------+------------------+---------+
   | i = 0      | Init       | swapped = F   | N/A        | [1, 2, 4, 3]     | Loaded  |
   | i = 0      | j = 0      | false         | 1 > 2 (F)  | [1, 2, 4, 3]     | Skip    |
   | i = 0      | j = 1      | false         | 2 > 4 (F)  | [1, 2, 4, 3]     | Skip    |
   | i = 0      | j = 2      | becomes TRUE  | 4 > 3 (T)  | Swap! [1, 2, 3, 4]| Swapped |
   +------------+------------+---------------+------------+------------------+---------+
   | i = 1      | Init       | swapped = F   | New Cycle  | [1, 2, 3, 4]     | Reset   |
   | i = 1      | j = 0      | false         | 1 > 2 (F)  | [1, 2, 3, 4]     | Skip    |
   | i = 1      | j = 1      | false         | 2 > 3 (F)  | [1, 2, 3, 4]     | Skip    |
   | End j-loop | N/A        | stayed FALSE  | (!swapped) | Breaks early!    | Clean   |
   |            |            |               |            | No wasted cycles | Exit    |
   +------------+------------+---------------+------------+------------------+---------+
   | Final Return| Returns the optimized evaluation array result: [1, 2, 3, 4]              |
   +----------------------------------------------------------------------------------------+
*/

function bubbleSortAdvanced(arr) {
    let len = arr.length;
    let swapped;
    
    for (let i = 0; i < len; i++) {
        swapped = false;
        
        
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
               
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
    
        if (!swapped) break;
    }
    return arr;
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE
// ==========================================================================
const test1 = bubbleSort([7, 5, 2, 4, 3, 9]);
console.log("Paradigm 1 Result (Standard):", test1); 

const test2 = bubbleSortAdvanced([9, 7, 5, 4, 3, 1]);
console.log("Paradigm 2 Result (Advanced):", test2); 

const test3 = bubbleSortAdvanced([1, 2, 3, 4, 5, 6]);
console.log("Paradigm 2 Result (Already Sorted):", test3);