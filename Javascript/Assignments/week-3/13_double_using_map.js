class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  doubleArray(arr) {
    // Your code goes here
    return arr.map((val, ind) => {
      return val * 2;
    });
  }
}
