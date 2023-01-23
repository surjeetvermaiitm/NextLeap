class Solution {
  /**
   * @param {number[][]} arr
   * @return {number[][]}
   */
  replaceZeroes(arr) {
    // Your code goes here
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === 0) {
          arr[i][j] = 1;
        }
      }
    }
    return arr;
  }
}
