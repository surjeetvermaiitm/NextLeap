class DataStorage {
  /**
   * @param {number} data
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * @return {number}
   */
  get() {
    // Your code goes here
    return this.data;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  set(value) {
    // Your code goes here
    this.data = value;
  }
}
