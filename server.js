/* globals process */

const async = () => {
    return Promise.resolve();
};

const config = require('./config');
const http = require('http');
const port = process.env.PORT || config.port;

async()
    .then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(config.port, () =>
            console.log(`Server running at: ${config.port}`));
        // app.set('port', port);
        // const server = http.createServer(app);
        // require('./socketio').init(server);
        // server.listen(config.port, () =>
        //     console.log(`Server running at: ${config.port}`));
});
