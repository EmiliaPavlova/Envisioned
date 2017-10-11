const init = (data) => {
    const controller = {
        getAll(req, res) {
            // let { sortBy } = req.query;
            // sortBy = sortBy || 'number';
            return data.books.getAll()
                .then((books) => {
                    return res.render('books/listAll', {
                        model: books,
                    });
                });
        },
    };
    return controller;
};

module.exports = { init };
