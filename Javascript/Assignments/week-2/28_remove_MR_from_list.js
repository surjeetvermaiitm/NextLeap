class Solution {
  /**
   * @param {string[]} arr
   * @return {string[]}
   */
  removeMR(arr) {
    // Your code goes here
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace("MR ", "");
    }
    return arr;
  }
}
