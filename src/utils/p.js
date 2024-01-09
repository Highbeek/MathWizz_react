// function plusMinus(arr) {
//   let n = arr.length;
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;

//   for (let i = 0; i < n; i++) {
//     if (arr[i] < 0) {
//       neg++;
//     } else if (arr[i] > 0) {
//       pos++;
//     } else {
//       zero++;
//     }
//   }

//   const negRatio = (neg / n).toFixed(6);
//   const posRatio = (pos / n).toFixed(6);
//   const zeroRatio = (zero / n).toFixed(6);

//   console.log(posRatio);
//   console.log(negRatio);
//   console.log(zeroRatio);
// }

// plusMinus([-4, 3, -9, 0, 4, 1]);
// plusMinus([6]);



function miniMaxSum(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b); // Sort the array in ascending order
    const minSum = sortedArr.slice(0, 4).reduce((sum, num) => sum + num, 0); // Sum the first four smallest numbers
    const maxSum = sortedArr.slice(1).reduce((sum, num) => sum + num, 0); // Sum the last four largest numbers
    return `${minSum} ${maxSum}`;
}

// Example usage
const inputArray = [1, 3, 5, 7, 9];
console.log(miniMaxSum(inputArray));