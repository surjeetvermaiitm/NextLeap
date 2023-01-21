class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  sumEvenNumbers(arr) {
    // Your code goes here
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        ans += arr[i];
      }
    }
    return ans;
  }
}
