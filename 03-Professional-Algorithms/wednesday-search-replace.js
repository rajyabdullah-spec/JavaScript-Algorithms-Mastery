/**
 * 📊 Wednesday: Search and Replace Algorithm
 * * Description:
 * Perform a search and replace on the sentence using the arguments provided 
 * and return the new sentence.
 * NOTE: Preserve the case of the original word (before) when you are replacing it.
 * * Example Input: myReplace("He is the Book master", "Book", "dog") => Expected Output: "He is the Dog master"
 */

/* ==========================================================================
   🏛️ PARADIGM 1: THE STRUCTURAL METHOD (Student-Friendly Conditional)
   ==========================================================================
   
   📊 STRUCTURAL T-DIAGRAM (Trace Table):
   Input Sentence: "A quick brown fox Jumped over the lazy dog"
   Target Word (before): "Jumped" | Replacement (after): "leaped"
   
   +------------------+-----------------------------------------+-----------------+--------+
   | Variable / Check | Expression / Evaluation                  | Current Value   | Status |
   +------------------+-----------------------------------------+-----------------+--------+
   | str              | Input baseline string                   | "A quick..."    | Loaded |
   | before           | Word to locate                          | "Jumped"        | Active |
   | after (Initial)  | Replacement word passed in              | "leaped"        | Pending|
   | Case Evaluation  | before[0] === before[0].toUpperCase()   | 'J' === 'J'     | true   |
   | Mutation Branch  | Enters true (Capitalization logic)      | Executed        | Match  |
   | after (Mutated)  | after[0].toUpperCase() + after.slice(1) | "Leaped"        | Ready  |
   | str.replace()    | Swaps "Jumped" with "Leaped"            | "A quick..."    | Clean  |
   +------------------+-----------------------------------------+-----------------+--------+
   | Final Return     | Returns the fully modified string sentence                         |
   +------------------+--------------------------------------------------------------------+
*/

function myReplace(str, before, after) {

    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);

    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }

    return str.replace(before, after);
}

/* ==========================================================================
   🏛️ PARADIGM 2: THE INLINE TERNARY METHOD (Advanced & Professional)
   ==========================================================================
   
   📊 TERNARY T-DIAGRAM (Trace Table):
   Input Sentence: "He is the Book master"
   Target Word (before): "Book" | Replacement (after): "dog"
   
   +------------------+-----------------------------------------+-----------------+--------+
   | Variable / Check | Expression / Evaluation                  | Current Value   | Status |
   +------------------+-----------------------------------------+-----------------+--------+
   | str              | Input baseline string                   | "He is the..."  | Loaded |
   | before           | Word to locate                          | "Book"          | Active |
   | after            | Replacement word passed in              | "dog"           | Pending|
   | Condition Check  | before[0] === before[0].toUpperCase()   | 'B' === 'B'     | true   |
   | Ternary Outcome  | Evaluates to true branch (?)            | True Branch     | Active |
   | adjustedAfter    | assigned 'D' + 'og'                     | "Dog"           | Unified|
   | str.replace()    | Swaps "Book" with "Dog"                 | "He is the..."  | Clean  |
   +------------------+-----------------------------------------+-----------------+--------+
   | Final Return     | Returns the inline expression evaluation                           |
   +------------------+--------------------------------------------------------------------+
*/

function myReplaceAdvanced(str, before, after) {

    const adjustedAfter = (before[0] === before[0].toUpperCase())
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
        
    return str.replace(before, adjustedAfter);
}

// ==========================================================================
// 🧪 RUNTIME TEST SUITE
// ==========================================================================
const test1 = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
console.log("Paradigm 1 Result:", test1); 
// Expected Output: "A quick brown fox Leaped over the lazy dog"

const test2 = myReplaceAdvanced("He is the Book master", "Book", "dog");
console.log("Paradigm 2 Result:", test2); 
// Expected Output: "He is the Dog master"