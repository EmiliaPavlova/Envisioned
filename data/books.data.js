const BaseData = require('./base.data');
const Book = require('../models/book.model');

class BooksData extends BaseData {
    constructor(db) {
        super(db, Book, Book);
    }

    getLast5() {
        return this.collection
            .find()
            .sort( { 'dateAdded': -1 } )
            // .aggregate( { $limit: 5 } )
            .toArray()
            .catch(function(err) {
                throw err;
            });
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid(model);
    }
}

module.exports = BooksData;
