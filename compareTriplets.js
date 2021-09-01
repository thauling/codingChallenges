// compare triplets

function compareTriplets(a, b) {
    // Write your code here
    /*If a[i] > b[i], then Alice is awarded 1 point.
      If a[i] < b[i], then Bob is awarded 1 point.
      If a[i] = b[i], then neither person receives a point.
    */
   let resultA = [];
   let resultB = [];
   let final = [];
    for (let i = 0; i < a.length; i++){
      if (a[i] > b[i]){
        resultA.push(1);
        resultB.push(0);
      }else if (a[i] < b[i]){
        resultA.push(0);
        resultB.push(1);
      }else {
        resultA.push(0);
        resultB.push(0);
       };
    }let resultASum = resultA.reduce((x, y) => x + y, 0);
     let resultBSum = resultB.reduce((x, y) => x + y, 0);
     //console.log(resultA);
     //console.log(resultB);
     //console.log(resultASum);
     //console.log(resultBSum);
     final.push(resultASum, resultBSum);
     return final;
}

console.log(compareTriplets([2,5,8,12,47],[3,12,8,45,3]));

// 2nd version
function compareTriplets2(a, b) {
   let resultA = [];
   let resultB = [];
   let final = [];
    for (let i = 0; i < a.length; i++){
      a[i] > b[i] ? (resultA.push(1), resultB.push(0)):
      a[i] < b[i] ? (resultA.push(0), resultB.push(1)):
      (resultA.push(0), resultB.push(0));
    }let resultASum = resultA.reduce((x, y) => x + y, 0);
     let resultBSum = resultB.reduce((x, y) => x + y, 0);
     final.push(resultASum, resultBSum);
     return final;
}

console.log(compareTriplets2([2,5,8,12,47],[3,12,8,45,50]));
