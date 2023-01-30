class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  findMax(arr) {
    // Your code goes here
    let ans = Number.MIN_VALUE;
    for (let n of arr) {
      ans = Math.max(ans, n);
    }
    return ans;
  }
}
