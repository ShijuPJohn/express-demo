const express = require('express');
const path = require('path');
const rootDir = require('../util/path')

const shopRoutes = express.Router();

shopRoutes.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = shopRoutes;