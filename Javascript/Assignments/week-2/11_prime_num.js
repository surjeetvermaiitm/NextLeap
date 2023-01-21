class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isPrime(n) {
    // Your code goes here
    for (let i = 2; i * i <= n + 1; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
