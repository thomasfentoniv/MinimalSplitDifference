/**
 * Find the smallest difference between the sum of numbers to the left
 * and the sum of numbers to the right of a point in the array.
 */

// Optimized approach.
function findMinimalSplitDifferenceOptimized(tours) {
  let total = tours.reduce((acc, val) => acc + val, 0);
  let preSum = 0;
  let postSum = total;
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < tours.length; i++) {
    preSum += tours[i];
    postSum -= tours[i];

    let difference = Math.abs(preSum - postSum);
    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

// Brute force approach.
function findMinimalSplitDifferenceBruteForce(tours) {
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < tours.length; i++) {
    let preSum = 0;
    for (let j = 0; j <= i; j++) {
      preSum += tours[j];
    }
    let postSum = 0;
    for (let j = i + 1; j < tours.length; j++) {
      postSum += tours[j];
    }
    let difference = Math.abs(preSum - postSum);
    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

module.exports = {
  findMinimalSplitDifferenceOptimized,
  findMinimalSplitDifferenceBruteForce,
};
