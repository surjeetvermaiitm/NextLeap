class Solution {
  /**
   * @param {number} n
   * @return {string}
   */
  convertToWords(n) {
    let limit = Math.pow(10, 9);
    let t = 0;
    if (n == 0) {
      return "zero";
    }
    let multiplier = ["", "Trillion", "Billion", "Million", "Thousand"];
    let first_twenty = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    let tens = [
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    if (n < 20) {
      return first_twenty[n];
    }
  }
}
