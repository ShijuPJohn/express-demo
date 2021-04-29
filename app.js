const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');
const app = express();

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use('/', ((req, res, next) => {
    res.status(404).sendfile(path.join(rootDir, 'views', 'not-found.html'));
}));

app.listen(3000);

