class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  sortDescending(arr) {
    // Your code goes here
    arr.sort((a, b) => {
      return a > b ? -1 : 1;
    });
    return arr;
  }
}
