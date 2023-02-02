class Sum {
  constructor() {}

  /**
   * @param {number[]} arr
   * @return {number}
   */
  getSum(arr) {
    // Your code goes here
    let total = 0;
    for (let val of arr) {
      total += val;
    }
    return total;
  }
}
