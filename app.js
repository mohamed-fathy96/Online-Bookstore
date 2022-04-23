const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const port = process.env.PORT || 7000;

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);

app.use('/admin', adminRoutes);

app.listen(port);

