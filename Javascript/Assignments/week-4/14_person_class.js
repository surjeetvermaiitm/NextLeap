class Person {
  /**
   * @param {string} name
   * @param {number} age
   * @param {string} address
   */
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  /**
   * @return {string}
   */
  getName() {
    // Your code goes here
    return this.name;
  }

  /**
   * @return {number}
   */
  getAge() {
    // Your code goes here
    return this.age;
  }

  /**
   * @return {string}
   */
  getAddress() {
    // Your code goes here
    return this.address;
  }
}
