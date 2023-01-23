class Solution {
  /**
   * @param {number[][]} grid
   * @return {number[][]}
   */
  findUnoccupied(grid) {
    // Your code goes here
    let m = grid.length;
    let n = grid[0].length;
    let ans = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) {
          ans.push([i, j]);
        }
      }
    }
    return ans;
  }
}
