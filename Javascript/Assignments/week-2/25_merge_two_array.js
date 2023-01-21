class Solution {
  /**
   * @param {number[]} arr1
   * @param {number[]} arr2
   * @return {number[]}
   */
  mergeArrays(arr1, arr2) {
    // Your code goes here
    arr1.push(...arr2);
    return arr1;
  }
}
