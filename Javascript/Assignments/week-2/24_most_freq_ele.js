class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  mostFrequent(arr) {
    // Your code goes here
    let mp = arr.reduce((acc, val) => {
      acc[val] = acc[val] ? acc[val] + 1 : 1;
      return acc;
    }, {});
    let ans = arr[0];
    for (let key in mp) {
      ans = Math.max(ans, mp[key]);
    }
    return ans;
  }
}
