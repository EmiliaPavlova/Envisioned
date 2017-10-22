const init = (app, data) => {
    const controller = {
        getHomeView(req, res) {
            return data.photos.getAll()
                .then((photo) => {
                    return res.render('home', {
                        model: photo,
                    });
                });
        },
    };
    return controller;
};

module.exports = {
    init,
};
