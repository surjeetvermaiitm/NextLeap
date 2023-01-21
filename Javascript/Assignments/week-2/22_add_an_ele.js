class Solution {
  /**
   * @param {number[]} arr
   * @param {number} element
   * @return {number[]}
   */
  addToBeginning(arr, element) {
    // Your code goes here
    arr.unshift(element);
    return arr;
  }
}
