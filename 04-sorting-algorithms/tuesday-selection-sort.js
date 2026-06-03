/**
 * 📊 Tuesday: Selection Sort Algorithm
 * * Section: Sorting Algorithms (Week 04)
 * * Description:
 * Sort an array of numbers in ascending order by repeatedly finding the minimum element 
 * from the unsorted part and putting it at the beginning (left side).
 * * Example Input: selectionSort([5, 3, 8, 2]) => Expected Output: [2, 3, 5, 8]
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (Traditional Nested Loops & Temp Variable)
   ==========================================================================
   
   📊 STRUCTURAL T-DIAGRAM (Trace Table):
   Input Array (arr): [5, 3, 8, 2] | len = 4
   
   +-------------+-------------+-----------------+-------------+------------------+---------+
   | Outer Loop  | Inner Loop  | Comparison      | Min Index   | Array State      | Status  |
   +-------------+-------------+-----------------+-------------+------------------+---------+
   | Init        | N/A         | Baseline setup  | minIdx = i  | [5, 3, 8, 2]     | Loaded  |
   | i = 0       | j = 1       | arr[1] < arr[0] | 3 < 5 (T)   | minIdx becomes 1 | Finding |
   | i = 0       | j = 2       | arr[2] < arr[1] | 8 < 3 (F)   | minIdx stays 1   | Finding |
   | i = 0       | j = 3       | arr[3] < arr[1] | 2 < 3 (T)   | minIdx becomes 3 | End J   |
   |             |             | Swap(arr[0],3)  |             | Swap! [2, 3, 8, 5]| '2' Set |
   +-------------+-------------+-----------------+-------------+------------------+---------+
   | i = 1       | j = 2       | arr[2] < arr[1] | 8 < 3 (F)   | minIdx stays 1   | Finding |
   | i = 1       | j = 3       | arr[3] < arr[1] | 5 < 3 (F)   | minIdx stays 1   | End J   |
   |             |             | minIdx == i     |             | No Swap [2, 3, 8, 5] '3' Set |
   +-------------+-------------+-----------------+-------------+------------------+---------+
   | i = 2       | j = 3       | arr[3] < arr[2] | 5 < 8 (T)   | minIdx becomes 3 | End J   |
   |             |             | Swap(arr[2],3)  |             | Swap! [2, 3, 5, 8]| '5' Set |
   | i = 3       | Loops end   | i < len broken  | False       | [2, 3, 5, 8]     | Sorted  |
   +-------------+-------------+-----------------+-------------+------------------+---------+
   | Final Return| Returns the structurally sorted array: [2, 3, 5, 8]                     |
   +-----------------------------------------------------------------------------------------+
*/

function selectionSort(arr) {
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        let minIdx = i;
        
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Swap elements using a temporary variable
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

/* ==========================================================================
   🏛️ PARADIGM 2: THE ADVANCED METHOD (ES6+ Destructuring & Guard Clause Swap)
   ==========================================================================
   
   📊 ADVANCED T-DIAGRAM (Trace Table):
   Input Array (arr): [29, 10, 14] | len = 3
   
   +------------+------------+---------------+------------+------------------+---------+
   | Outer Loop | Inner Loop | Target Check  | Min Index  | Array State      | Status  |
   +------------+------------+---------------+------------+------------------+---------+
   | i = 0      | j = 1      | 10 < 29 (T)   | minIdx = 1 | [29, 10, 14]     | Active  |
   | i = 0      | j = 2      | 14 < 10 (F)   | minIdx = 1 | [29, 10, 14]     | End J   |
   |            | Guard Check| minIdx !== i  | (1 !== 0)  | Swap! [10, 29, 14]| ES6 Swap|
   +------------+------------+---------------+------------+------------------+---------+
   | i = 1      | j = 2      | 14 < 29 (T)   | minIdx = 2 | [10, 29, 14]     | End J   |
   |            | Guard Check| minIdx !== i  | (2 !== 1)  | Swap! [10, 14, 29]| ES6 Swap|
   +------------+------------+---------------+------------+------------------+---------+
   | Final Return| Returns the modern evaluated sorted array: [10, 14, 29]                  |
   +----------------------------------------------------------------------------------------+
*/

function selectionSortAdvanced(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len; i++) {
        let minIdx = i;
        
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Guard clause to swap only when a new minimum is found
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE
// ==========================================================================
const test1 = selectionSort([5, 3, 8, 2]);
console.log("Paradigm 1 Result (Standard Selection):", test1); 

const test2 = selectionSortAdvanced([29, 10, 14, 37, 13]);
console.log("Paradigm 2 Result (Advanced Selection):", test2);