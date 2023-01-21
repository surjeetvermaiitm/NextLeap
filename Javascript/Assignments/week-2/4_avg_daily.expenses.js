class Solution {
  /**
   * @param {number[]} expenses
   * @param {number} numDays
   * @return {number}
   */
  calculateAverageDailyExpense(expenses, numDays) {
    // Your code goes here
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
      sum += expenses[i];
    }
    return sum / numDays;
  }
}
