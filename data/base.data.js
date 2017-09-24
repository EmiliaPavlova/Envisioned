const { ObjectID } = require('mongodb');

class BaseData {
    constructor(db, ModelClass, validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }
    
    getAll() {
        return this.collection.find()
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
    
    create(model) {
        if (!this._isModelValid(model)) {
            return Promise.reject('Invalid model');
        }
        
        return this.collection.insert(model)
        .then(() => {
            return this.ModelClass.toViewModel(model);
        })
        .catch(function(err) {
            throw err;
        });
    }
    
    findById(id) {
        return this.collection.findOne({
            _id: new ObjectID(id),
        });
    }

        filterBy(props) {
            return this.collection.find(props)
                .toArray();
        }
    
        // gatherAllUniqProps(props) {
        //     return this.collection.distinct(props);
        // }

    updateById(model) {
        return this.collection.updateOne({
            _id: model._id,
        }, model);
    }

    // findOrCreateBy(props) {
    //     return this.filterBy(props)
    //         .then(([model]) => {
    //             if (!model) {
    //                 model = {};
    //                 return this.collection.insert(model)
    //                     .then(() => {
    //                         return model;
    //                     });
    //             }
    //             return model;
    //         });
    // }

    // findByNumber(id) {
    //     return this.collection.findOne({
    //         number: id,
    //     });
    // }

    getCollectionCount() {
        return this.collection.count();
    }

    _isModelValid(model) {
        // TODO
        return this.validator.isValid(model);
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;