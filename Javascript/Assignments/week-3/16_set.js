class Solution {
  /**
   * @param {number[]} arr
   * @param {number} val
   * @return {number[]}
   */
  set(arr, val) {
    // Your code goes here
    let ans = new Set(arr);
    ans.add(val);
    return [...ans];
  }
}
