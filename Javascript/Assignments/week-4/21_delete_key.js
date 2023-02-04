class Solution {
  /**
   * @param {Object} obj
   * @param {...string} keys
   * @return {Object}
   */
  removeKeys(obj, ...keys) {
    // Your code goes here
    for (let k of keys) {
      delete obj[k];
    }
    return obj;
  }
}
