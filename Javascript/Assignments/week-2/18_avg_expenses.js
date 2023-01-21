class Solution {
  /**
   * @param {number[]} expenses
   * @return {number}
   */
  averageDailyExpense(expenses) {
    // Your code goes here
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i];
    }
    return total / expenses.length;
  }
}
