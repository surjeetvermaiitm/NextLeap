class Solution {
  /**
   * @param {Object} obj
   * @return {Object}
   */
  onlyStringProperties(obj) {
    // Your code goes here
    let ans = {};
    for (let [key, val] of Object.entries(obj)) {
      if (typeof val === "string") {
        ans[key] = val;
      }
    }
    return ans;
  }
}
