class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  sum(arr) {
    // Your code goes here
    let total = 0;
    for (let val of arr) {
      total += val;
    }
    return total;
  }
}
