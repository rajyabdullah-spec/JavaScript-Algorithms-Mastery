# 🧠 JavaScript Algorithms Mastery

This repository is a dedicated space for mastering algorithmic logic, data structures, and problem-solving patterns. Each solution is engineered for efficiency and verified through rigorous T-Diagram analysis.

## 🚀 Weekly Sprint: Basic Algorithms (Week 01)
*Focus: Mastering loops, conditionals, and initial mathematical patterns.*

| Day | Challenge | Core Logic | View Code |
| :--- | :--- | :--- | :--- |
| **Monday** | 13 Fundamentals | Loops, Summation, Max/Min | [View JS](./01-Basic-Algorithms/Monday-Basic.js) |
| **Tuesday** | Logic Patterns | Fibonacci, FizzBuzz, Array Shifting | [View JS](./01-Basic-Algorithms/Tuesday-Logic.js) |
| **Wednesday** | Factorialize! | Multiplicative Identity & Iteration | [View JS](./01-Basic-Algorithms/Wednesday-Factorial.js) |
| **Thursday** | Palindrome Checker | String Symmetry & Pre-processing | [View JS](./01-Basic-Algorithms/Thursday-Palindrome.js) |
| **Friday** | 3rd Highest Number | O(n) Efficiency & Variable Shifting | [View JS](./01-Basic-Algorithms/Friday-ThirdHighest.js) |

## 🚀 Weekly Sprint: Intermediate Algorithms (Week 02)
*Focus: Mastering nested loops, complex data structures, and multi-dimensional arrays.*

| Day | Challenge | Core Logic | View Code |
| :--- | :--- | :--- | :--- |
| **Monday** | Largest Number in Arrays | Nested Loops & Dynamic Max Tracking | [View JS](./02-Intermediate-Algorithms/Monday-LargestNumbers.js) |
| **Tuesday** | Find the Longest Word in a String | String Splitting & Length Comparison | [View JS](./02-Intermediate-Algorithms/Tuesday-LongestWord.js) |
| **Wednesday** | Title Case a Sentence | String Splitting & Casing Normalization | [View JS](./02-Intermediate-Algorithms/Wednesday-TitleCase.js) |
| **Thursday** | Sum All Numbers in a Range | Iterative Accumulation vs O(1) Gauss Formula | [View JS](./02-Intermediate-Algorithms/thursday-sum-all-numbers-in-a-range.js) |
| **Friday** | Fibonacci Sequence | Iterative Pointers O(n) & Optimized Space O(1) | [View JS](./02-Intermediate-Algorithms/Friday-Fibonacci.js) |

## 🚀 Advanced Track: Professional Algorithms (Week 03)
*Focus: Advanced mathematical control flow, state machine simulation, and professional technical specifications.*

| Day | Challenge | Core Logic | View Code |
| :--- | :--- | :--- | :--- |
| **Monday** | Game of 3s | Conditional Loops, Modulo Math & Flow Control | [View JS](./03-Professional-Algorithms/Monday-GameOfThree.js) |
| **Tuesday** | Magic Squares | 3x3 Grid Matrix Parity Evaluation & Structural Index Tracing | [View JS](./03-Professional-Algorithms/Tuesday-MagicSquares.js) |
| **Wednesday** | Search and Replace | Case Preservation, String Mutation & Substring Slicing | [View JS](./03-Professional-Algorithms/Wednesday-SearchReplace.js) |
| **Thursday** | Sum All Primes | Inner Iterative Primes Isolation & Optimized $O(\sqrt{n})$ Boundary Check | [View JS](./03-Professional-Algorithms/Thursday-SumAllPrimes.js) |
| **Friday** | Sum All Odd Fibonacci | Sub-boundary Fibonacci Series Generation & Iterative Bitwise/Modulo Odd Filtering | [View JS](./03-Professional-Algorithms/friday-sum-odd-fibonacci.js) |

## 🚀 Weekly Sprint: Sorting Algorithms (Week 04)
*Focus: Understanding computational complexity, array mutations, elements swapping, and optimized sorting passes.*

| Day | Challenge | Core Logic | View Code |
| :--- | :--- | :--- | :--- |
| **Monday** | Bubble Sort | Traditional Nested Loops, Temp Swapping & Early Exit Optimized Flaggings | [View JS](./04-sorting-algorithms/monday-bubble-sort.js) |
| **Tuesday** | Selection Sort | Repeated Minimum Index Finding, Linear Scanning & ES6+ Destructured Element Swapping | [View JS](./04-sorting-algorithms/tuesday-selection-sort.js) |

## 🚀 Weekly Sprint: Recursion Algorithms (Week 05)
*Focus: Mastering system call stacks, base cases, and functional windings versus efficiency algorithms.*

| Day | Challenge | Core Logic | View Code |
| :--- | :--- | :--- | :--- |
| **Monday** | rFactorial vs iFactorial | Structural Loops vs Memory Stack Functional Recursion Frameworks | [View JS](./05-recursion-algorithms/monday-factorial.js) |
| **Tuesday** | Bunny Ears Challenge | Iterative Accumulation vs Pure Functional Recursive Call Stack Aggregation | [View JS](./05-recursion-algorithms/tuesday-bunny-ears.js) |
| **Wednesday** | Power N Challenge | Iterative Multiplication vs Pure Recursive Decrementing Stack Evaluation | [View JS](./05-recursion-algorithms/wednesday-powern.js) |
| **Thursday** | iFib vs rFib (Adjusted) | Variable Rolling Pointer Loops vs Binary Call Stack Branching Trees | [View JS](./05-recursion-algorithms/thursday-fibonacci.js) |
| **Friday** | r Triangle Challenge | Structural Accumulator Loops vs Linear Tail-Recursive Addition Stacks | [View JS](./05-recursion-algorithms/friday-triangle.js) |

## 🚀 Evaluation Gate: Milestone Challenges (06-Challenges)
*Focus: Executing critical computer science algorithms, mathematical logic limits, and recursive tracing structures under rigid bootcamp test conditions.*

### 📝 1. Mock Evaluation Pipeline
* **`demo-algorithm-challenge.js`**: An extensive milestone collection solving foundational logic blocks. Includes in-place array reversing workflows, custom recursive collection filtering, selection sort implementations, and multi-dimensional subarray matrix scans.
    <details>
    <summary>🎬 <b>Click to view Demo Challenge Verification Tables</b></summary>
    <br>

    #### Algorithm 1: Dynamic Two-Pointer Array Reversing Trace (`[2, 1, 6, 4, -7]`)
    | start | end | X[start] | X[end] | Temporary Swap Action | Array State Result |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | `0` | `4` | `2` | `-7` | Swap `2` with `-7` | `[-7, 1, 6, 4, 2]` |
    | `1` | `3` | `1` | `4` | Swap `1` with `4` | `[-7, 4, 6, 1, 2]` |
    | `2` | `2` | Loop terminates (`start < end` is False) | - | - | **`[-7, 4, 6, 1, 2]`** |

    #### Algorithm 2: Recursive Negatives Removal Call Stack Winding (`[1, -2, 4, 1]`)
    * `Frame 1: index = 0` -> Holds `1`, waits for Frame 2.
    * `Frame 2: index = 1` -> Holds `-2` (Negative Skip), waits for Frame 3.
    * `Frame 3: index = 2` -> Holds `4`, waits for Frame 4.
    * `Frame 4: index = 3` -> Holds `1`, waits for Frame 5.
    * `Frame 5: index = 4` -> **Base Case Reached!** Returns `[]`.
    * *Unwinding Aggregation Result:* `[1] + [4] + [] + [1]` => **`[1, 4, 1]`**.
    </details>

### 🎖️ 2. Official Bootcamp Evaluation Track
* **`AlgorithmsChallenge3.js`**: The formal assessment suite delivered by **Instructor Wesam Shujaa**. Features advanced mathematical implementations including custom Exclusive OR (XOR) divisibility summation filters, large scale Fibonacci calculation loops ($N < 1,000,000$), and array parsing logic blocks.

    <details>
    <summary>📊 <b>Click to view Official Challenge 3 Verification Tables</b></summary>
    <br>

    #### Algorithm 4: Palindrome Dual-Pointer Logic Check ('kayak')
    | str | left | right | str[left] | str[right] | str[left] === str[right] | Status |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | `"kayak"` | 0 | 4 | `'k'` | `'k'` | True | Active |
    | `"kayak"` | 1 | 3 | `'a'` | `'a'` | True | Active |
    | `"kayak"` | 2 | 2 | Loop terminates (left < right is False) | - | - | **Passed** |

    #### Algorithm 5: Iterative Negative Filter Data Verification Vector
    | arr | i | arr[i] | arr[i] >= 0 | resultArr |
    | :--- | :--- | :--- | :--- | :--- |
    | `[1, -2, 3]` | Init | - | - | `[]` |
    | `[1, -2, 3]` | 0 | 1 | True | `[1]` |
    | `[1, -2, 3]` | 1 | -2 | False | `[1]` |
    | `[1, -2, 3]` | 2 | 3 | True | `[1, 3]` |
    </details>

---

## 🛠️ Engineering Standards
To ensure high-quality code and zero-error logic, every algorithm in this repository follows these standards:

1. **T-Diagram Verification**: Every solution is manually traced before implementation to ensure logical accuracy.
2. **ES6+ Standards**: Utilizing modern JavaScript features (`const`, `let`, Arrow Functions) for clean and readable code.
3. **Optimized Iteration**: Prioritizing time complexity by reducing unnecessary loop cycles (e.g., using `length / 2` for symmetry checks).
4. **Data Sanitization**: Handling real-world input variations, including case sensitivity and whitespace management.

---

## 📁 Repository Structure
- **01-Basic-Algorithms/**: Foundation level challenges (Week 01).
- **02-Intermediate-Algorithms/**: Medium complexity challenges involving nested logic and data manipulation (Week 02).
- **03-Professional-Algorithms/**: High-tier structural logic and complex mathematical simulations (Week 03).
- **04-sorting-algorithms/**: Core computer science sorting mechanisms and performance-optimized array mutations (Week 04).
- **05-recursion-algorithms/**: Functional winding stack architectures and recursive problem-solving workflows (Week 05).
- **06-Challenges/**: Official bootcamp challenge evaluations, logic specifications, and multi-dimensional matrix checks.

---

## 👨‍💻 Designed & Developed By

* **Developer:** Raji Al-Abdullah
* **Track:** Full-Stack Web Development (JavaScript Algorithms Mastery)
* **Live Showcase:** [Visit My Live Portfolio Hub](https://rajyabdullah-spec.github.io/matrix-master-exercises/portfolio-hub/) 🌐

*Engineered by Raji Al-Abdullah - 2026*