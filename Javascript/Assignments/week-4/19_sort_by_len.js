class Solution {
  /**
   * @param {...string} strings
   * @return {string[]}
   */
  sortByLength(...strings) {
    // Your code goes here
    strings.sort((a, b) => {
      return a.length >= b.length ? 1 : -1;
    });
    return strings;
  }
}
