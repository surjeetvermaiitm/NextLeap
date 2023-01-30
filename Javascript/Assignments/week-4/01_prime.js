class Solution {
  /**
   * @param {number} num
   * @return {boolean}
   */
  isPrime(num) {
    // Your code goes here
    for (let i = 2; i * i <= num + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
