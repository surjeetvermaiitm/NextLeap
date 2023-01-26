class Solution {
  /**
   * @param {[Object]} students
   * @return {number[]}
   */
  calculateTotalScore(students) {
    // Your code goes here
    return students.map((val) => {
      let total = 0;
      for (let score of val["scores"]) {
        total += score;
      }
      return total;
    });
  }
}
