class Solution {
  /**
   * @param {number[][]} arr
   * @return {number[]}
   */
  printDiagonalNumbers(arr) {
    // Your code goes here
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      ans.push(arr[i][i]);
    }
    return ans;
  }
}
