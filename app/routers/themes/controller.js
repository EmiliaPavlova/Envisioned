const init = (data) => {
    const controller = {
        getAll(req, res) {
            // let { sortBy } = req.query;
            // sortBy = sortBy || 'number';
            let { page, size } = req.query;
            page = parseInt(page, 10) || 1;
            size = 2;
            return data.themes.getByPage(page, size)
                .then((themes) => {
                    return res.render('themes/index', {
                        model: themes,
                        page: req.query.page,
                    });
                });
        },
        getThemeById(req, res) {
            return data.themes.findById(req.params.id)
                .then((theme) => {
                    return res.render('themes/theme', {
                        model: theme,
                    });
                });
        },
    };
    return controller;
};

module.exports = { init };
