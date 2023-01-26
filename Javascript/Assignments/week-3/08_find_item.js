class Solution {
  /**
   * @param {[Object]} list
   * @param {Object} target
   * @return {Object}
   */
  findItemInList(list, target) {
    // Your code goes here
    for (let ob of list) {
      if (ob["name"] === target["name"] && ob["value"] === target["value"]) {
        return ob;
      }
    }
  }
}
