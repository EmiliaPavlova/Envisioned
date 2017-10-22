module.exports = (app, data) => {
    const home = require('./home')(app, data);
    const themes = require('./themes')(app, data);

    app.use('/', home);
    app.use('/', themes);
    app.use('/:id', themes);
};
