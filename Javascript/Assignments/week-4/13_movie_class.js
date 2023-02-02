class Movies {
  /**
   * @param {string} title
   * @param {number} releaseYear
   * @param {number} rating
   * @param {string} director
   */
  constructor(title, releaseYear, rating, director) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.director = director;
  }

  /**
   * @return {string}
   */
  getTitle() {
    // Your code goes here
    return this.title;
  }

  /**
   * @return {number}
   */
  getReleaseYear() {
    // Your code goes here
    return this.releaseYear;
  }

  /**
   * @return {number}
   */
  getRating() {
    // Your code goes here
    return this.rating;
  }

  /**
   * @return {string}
   */
  getDirector() {
    // Your code goes here
    return this.director;
  }
}
