class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {void}
   */
  swap(a, b) {
    // Your code goes here
    //[a,b]=[b,a]

    let temp = a;
    a = b;
    b = temp;
    console.log(a);
    console.log(b);
  }
}
