// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// solution
function fakeBin(x){
    return x.split("").map(a => a < "5" ? "0" : "1").join("");
   }
   
   console.log(fakeBin("234234234"))