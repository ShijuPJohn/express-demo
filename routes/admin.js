const express = require('express');

const adminRoutes = express.Router();
const path = require('path');
const rootDir = require('../util/path');

adminRoutes.post('/add-product', ((req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}));

adminRoutes.get('/add-product', ((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}))

module.exports = adminRoutes;