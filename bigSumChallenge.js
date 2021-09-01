// big Sum Challenge

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    let BigIntAr = [];
    for (let i=0; i<ar.length; i++){
         BigIntAr.push(BigInt(ar[i]));
    }
    return BigIntAr.reduce((a, b) => a + b, 0n); //note the conversion of 0 to BigInt(0), 0n
};

console.log(aVeryBigSum([20000,45,1]));
  
  //ar[i] > Number.MAX_SAFE_INTEGER ?

function aVeryBigSum2(ar) {
    // Write your code here
    let BigIntAr = [];
    for (let i=0; i<ar.length; i++){
         BigIntAr.push(BigInt(ar[i]));
    }
    let result = BigIntAr.reduce((a, b) => a + b, 0n); //note the conversion of 0 to BigInt(0), 0n
    return result <= Number.MAX_SAFE_INTEGER ? Number(result) : result;
};

let bigNumber = (2**31 - 1);
let biggestNumber = Number.MAX_SAFE_INTEGER;
console.log(aVeryBigSum2([biggestNumber,biggestNumber,bigNumber]));
//console.log(biggestNumber + 10 == biggestNumber + 12);