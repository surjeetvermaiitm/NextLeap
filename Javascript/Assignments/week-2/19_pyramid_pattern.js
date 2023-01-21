class Solution {
  /**
   * @param {number} n
   * @return {void}
   */
  printPyramid(n) {
    // Your code goes here
    for (let i = 1; i <= n; i++) {
      let str = "";
      for (let j = 1; j <= i; j++) {
        str += i;
      }
      console.log(str);
    }
  }
}
