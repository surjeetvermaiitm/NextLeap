class Solution {
  /**
   * @param {[Object]} students
   * @param {string} classToFilter
   * @return {[Object]}
   */
  filterStudents(students, classToFilter) {
    // Your code goes here
    return students.filter((ob) => {
      return ob["class"] === classToFilter;
    });
  }
}
