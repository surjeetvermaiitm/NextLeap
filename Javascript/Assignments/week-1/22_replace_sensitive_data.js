class Solution {
  /**
   * @param {string} log
   * @return {string}
   */
  replaceSensitiveData(log) {
    // Your code goes here
    let str = log.split(" ");
    let ans = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i].includes("@")) {
        ans += " [REDACTED]";
      } else {
        ans += " " + str[i];
      }
    }
    return ans.trim();
  }
}
