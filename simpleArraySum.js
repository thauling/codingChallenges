function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for(i=0; i < ar.length;i++){
        sum += ar[i];
    }   
    return sum;
}

console.log(simpleArraySum([1,4,6]));

console.log(
  [1, 4,6].reduce((a, b) => a + b, 0)
);

function simpleArraySum2(ar) {
    // Write your code here
   return ar.reduce((a, b) => a + b, 0);
}

console.log(simpleArraySum2([1,4,6]));
