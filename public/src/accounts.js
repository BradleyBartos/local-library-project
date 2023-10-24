function findAccountById(accounts, id) {
  return accounts.find(acct => acct.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acct1, acct2) => acct1.name.last.toLowerCase() < acct2.name.last.toLowerCase() ? -1 : 1);
}

function getAccountFullNames(accounts) {
  return accounts.map(acct => acct.name.first + " " + acct.name.last);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
