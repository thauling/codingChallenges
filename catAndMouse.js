// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
      //'Cat A', 'Cat B', or 'Mouse C'
      return Math.abs(z - x) == Math.abs(z - y) ? 'Mouse C' :
      Math.abs(z - x) < Math.abs(z - y) ? 'Cat A' : 'Cat B';
}
console.log(catAndMouse(10,14,12))