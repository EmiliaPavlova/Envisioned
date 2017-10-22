const express = require('express');

module.exports = (app, data) => {
    const router = new express.Router();
    const controller = require('./controller').init(data);

    router
        .get('/themes', controller.getAll)
        .get('/themes/:id', controller.getThemeById);

    return router;
};
