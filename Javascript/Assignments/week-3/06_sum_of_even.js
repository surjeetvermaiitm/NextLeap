class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  sumEvenNumbers(arr) {
    // Your code goes here
    let ans = 0;
    for (let n of arr) {
      if (n % 2 === 0) {
        ans += n;
      }
    }
    return ans;
  }
}
