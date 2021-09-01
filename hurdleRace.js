function hurdleRace(k, height) {
    // Write your code here
    let result = Math.max(...height) - k;
    return result > 0 ? result : 0;
}




console.log(hurdleRace(4,[1,4,2]));