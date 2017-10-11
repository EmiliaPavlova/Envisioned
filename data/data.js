const seed = require('../db/seed.json');
const BooksData = require('./books.data');

const init = async (db) => {
    const collectionBooks = db.collection('books');
    if (await collectionBooks.count() === 0) {
        collectionBooks.insert(seed.books);
    }

    return Promise.resolve({
        books: new BooksData(db),
    });
};


module.exports = { init };
