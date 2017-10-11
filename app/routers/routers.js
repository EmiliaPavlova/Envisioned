module.exports = (app, data) => {
    const home = require('./home')(app, data);
    const books = require('./books')(app, data);

    app.use('/', home);
    app.use('/', books);
};
