const BaseData = require('./base.data');
const Theme = require('../models/theme.model');

class ThemesData extends BaseData {
    constructor(db) {
        super(db, Theme, Theme);
    }

    getByPage(page, size) {
        return this.collection
            .find()
            .sort( { 'dateAdded': 1 } )
            .skip((page - 1) * size)
            .limit(size)
            .toArray()
            .then((models) => {
                if (this.ModelClass.toViewModel) {
                    return models
                    .map((model) => this.ModelClass.toViewModel(model));
                }
                return models;
            })
            .catch(function(err) {
                throw err;
            });
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid(model);
    }
}

module.exports = ThemesData;
