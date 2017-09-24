module.exports = (app, data) => {
    const home = require('./home')(app, data);

    app.use('/', home);
};
