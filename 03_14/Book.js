class Book {
  constructor(
    title,
    author,
    pages,
    price,
    coverType,
    datePublished,
    codeISBN,
    ranking
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.coverType = coverType;
    this.datePublished = datePublished;
    this.codeISBN = codeISBN;
    this.ranking = ranking;
  }
  updateRanking(newRank) {
    this.ranking = newRank;
  }
  bookAge() {
    let now = new Date();
    let published = new Date(this.datePublished);
    let elapsed = now - published; // elapsed time in milliseconds
    let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSincePublished;
  }
}

export default Book;
