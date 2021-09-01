/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxCandle = Math.max(...candles);
    //console.log(Math.max(...candles));
    let counter = 0;
    for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxCandle) counter++;
} return counter;
};

console.log(birthdayCakeCandles([4,4,4,2,3]));
