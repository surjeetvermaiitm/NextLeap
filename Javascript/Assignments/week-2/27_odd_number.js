class Solution {
  /**
   * @param {number[]} arr
   * @param {number} num
   * @return {number[]}
   */
  greaterThan(arr, num) {
    // Your code goes here
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        ans.push(arr[i]);
      }
    }
    return ans;
  }
}
