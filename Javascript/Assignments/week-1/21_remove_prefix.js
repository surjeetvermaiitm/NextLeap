class Solution {
  /**
   * @param {string} name
   * @return {string}
   */
  removePrefix(name) {
    // Your code goes here
    if (name.slice(0, 3) === "Mr.") {
      return name.slice(3);
    } else {
      return name;
    }
  }
}
