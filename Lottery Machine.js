// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"


// solution
function lottery(str) {
    let uniqueDigits = new Set(); 
    let result = '';  
    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {        
            if (!uniqueDigits.has(char)) {
                uniqueDigits.add(char);
                result += char; 
            }
        }
    }

    if (result === '') {
        return "One more run!";
    }
    return result;
}