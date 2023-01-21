class Solution {
  /**
   * @param {number[]} expenses
   * @return {number}
   */
  totalMonthlyExpense(expenses) {
    // Your code goes here
    let ans = expenses.reduce((acc, val) => {
      acc += val;
      return acc;
    });
    return ans;
  }
}
