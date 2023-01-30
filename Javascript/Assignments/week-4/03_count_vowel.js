class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  countVowels(s) {
    // Your code goes here
    let st = new Set(["a", "e", "i", "o", "u"]);
    let ans = 0;
    for (let ch of s) {
      if (st.has(ch)) {
        ans += 1;
      }
    }
    return ans;
  }
}
console.log(Math.max(1, 2, 3, 4));
