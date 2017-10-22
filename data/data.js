const seed = require('../db/seed.json');
const PhotosData = require('./photos.data');
const ThemesData = require('./themes.data');

const init = async (db) => {
    const collectionPhotos = db.collection('photos');
    if (await collectionPhotos.count() === 0) {
        collectionPhotos.insert(seed.photos);
    }
    const collectionThemes = db.collection('themes');
    if (await collectionThemes.count() === 0) {
        collectionThemes.insert(seed.articles);
    }

    return Promise.resolve({
        photos: new PhotosData(db),
        themes: new ThemesData(db),
    });
};


module.exports = { init };
