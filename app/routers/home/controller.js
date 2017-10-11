const init = (app, data) => {
    const controller = {
        getHomeView(req, res) {
            return data.books.getAll()
                .then((book) => {
                    console.log('books', book);
                    return res.render('home', {
                        model: book,
                    });
                });
        },
    };
    return controller;
};

module.exports = {
    init,
};
