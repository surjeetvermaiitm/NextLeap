class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  removeDuplicates(arr) {
    // Your code goes here
    return [...new Set(arr)];
  }
}
