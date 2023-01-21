class Solution {
  /**
   * @param {string[]} characters
   * @param {number} rows
   * @return {void}
   */
  printDiamond(characters, rows) {
    // Your code goes here
    let n = Math.ceil(rows / 2);
    for (let i = 1; i <= n; i++) {
      let str = "";
      for (let j = 1; j <= n - i; j++) {
        str += " ";
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        str += characters[k - 1];
      }
      console.log(str);
    }
    for (let p = 1; p < n; p++) {
      let str2 = "";
      for (let q = 1; q <= p; q++) {
        str2 += " ";
      }
      for (let r = 1; r <= 2 * n - 2 * p - 1; r++) {
        str2 += characters[r - 1];
      }
      console.log(str2);
    }
  }
}
