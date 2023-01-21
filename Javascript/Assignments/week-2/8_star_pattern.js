class Solution {
  /**
   * @param {number} n
   * @return {void}
   */
  star(n) {
    // Your code goes here
    for (let i = 1; i <= n; i++) {
      let str = "";
      for (let j = 1; j <= i; j++) {
        str += "*";
      }
      console.log(str);
    }
  }
}
