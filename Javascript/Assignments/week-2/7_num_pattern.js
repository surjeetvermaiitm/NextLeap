class Solution {
  /**
   * @param {number} n
   * @return {void}
   */
  TimesTable(n) {
    // Your code goes here
    for (let i = 1; i <= n; i++) {
      let str = "";
      for (let j = 1; j <= n; j++) {
        str += ` ${i * j}`;
      }
      console.log(str.trim());
    }
  }
}
