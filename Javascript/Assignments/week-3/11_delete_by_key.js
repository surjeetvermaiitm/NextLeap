class Solution {
  /**
   * @param {Object} obj
   * @param {string} key
   * @return {Object}
   */
  deleteKey(obj, key) {
    // Your code goes here
    delete obj[key];
    return obj;
  }
}
