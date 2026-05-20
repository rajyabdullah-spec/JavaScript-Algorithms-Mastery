/**
 * Challenge: Title Case a Sentence
 * Repository: JavaScript-Algorithms-Mastery
 * Directory: 02-Intermediate-Algorithms/Wednesday-TitleCase.js
 */

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/*
==================================================================================
T-DIAGRAM / TRACING TABLE
Test Case Input: "sHoRt AnD sToUt"
==================================================================================
Step | Operation / Method    | Current Value / Execution Result
----------------------------------------------------------------------------------
1    | str.toLowerCase()     | "short and stout"
2    | .split(' ')           | ["short", "and", "stout"]
3    | .map() - Iteration 1  | word = "short" -> 'S' + 'hort' -> "Short"
     | .map() - Iteration 2  | word = "and"   -> 'A' + 'nd'   -> "And"
     | .map() - Iteration 3  | word = "stout" -> 'S' + 'tout' -> "Stout"
     | Map Resulting Array   | ["Short", "And", "Stout"]
4    | .join(' ')            | "Short And Stout"
==================================================================================
*/

// ---- Test Cases Verification ----
console.log(titleCase("I'm a little tea pot")); // Output: "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt"));     // Output: "Short And Stout"